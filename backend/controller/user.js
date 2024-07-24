const express = require("express");
const path = require("path");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const ErrorHandler = require("../utils/ErrorHandler");
const User = require("../model/user");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
require('dotenv').config(); // Ensure environment variables are loaded

// Define the path to the uploads folder
const uploadsPath = path.join("C:\\Users\\Asus\\Desktop\\store", "uploads");

// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadsPath);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const filename = file.originalname.split(".")[0];
        cb(null, filename + "-" + uniqueSuffix + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

// Create user
router.post("/create-user", upload.single("file"), async (req, res, next) => {
    const { name, email, password } = req.body;

    try {
        // Check if user already exists
        const userEmail = await User.findOne({ email });

        if (userEmail) {
            const filename = req.file.filename;
            const filePath = path.join(uploadsPath, filename);

            // Delete the uploaded file
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ message: "Error deleting file" });
                }
            });

            return next(new ErrorHandler("User already exists", 400));
        }

        const filename = req.file.filename;
        const fileUrl = path.join("/uploads", filename); // Ensuring the correct file path

        const userData = {
            name: name,
            email: email,
            password: password,
            avatar: {
                public_id: filename,
                url: fileUrl,
            },
        };

        const activationToken = createActivationToken(userData);

        const activationUrl = `http://localhost:3000/activation/${activationToken}`;

        try {
            await sendMail({
                email: userData.email,
                subject: "Activate your account",
                message: `Hello ${userData.name}, please click on the link to activate your account: ${activationUrl}`,
            });
            res.status(201).json({
                success: true,
                message: `Please check your email: ${userData.email} to activate your account!`,
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }

    } catch (error) {
        console.error("An error occurred:", error);
        return next(new ErrorHandler("Internal Server Error", 500));
    }
});

// Create activation token
const createActivationToken = (userData) => {
    return jwt.sign(userData, process.env.ACTIVATION_SECRET, {
        expiresIn: "5m",
    });
};

// Activate user
router.post("/activation", catchAsyncErrors(async (req, res, next) => {
    try {
        const { activation_token } = req.body;

        if (!activation_token) {
            return next(new ErrorHandler("No token provided!", 400));
        }

        const userData = jwt.verify(activation_token, process.env.ACTIVATION_SECRET);

        if (!userData) {
            return next(new ErrorHandler("Invalid or expired token!", 400));
        }

        const { name, email, password, avatar } = userData;

        // Check if user already exists
        const userEmail = await User.findOne({ email });

        if (userEmail) {
            return next(new ErrorHandler("User already exists", 400));
        }

        const user = await User.create({
            name,
            email,
            avatar,
            password,
        });

        sendToken(user, 201, res);

    } catch (error) {
        console.error("Activation error:", error);
        return next(new ErrorHandler(error.message, 500));
    }
}));


// login user
router.post("/login-user", catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHandler("Please provide all fields!", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHandler("User does not exist!", 400));
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
        return next(new ErrorHandler("Please provide a valid password", 400));
    }

    sendToken(user, 200, res);
}));


// Export the router
module.exports = router;
