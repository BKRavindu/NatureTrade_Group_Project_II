const express = require("express");
const path = require("path");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const ErrorHandler = require("../utils/ErrorHandler");
const User = require("../model/user");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");
const catchAsyncErrors = require("../middleware/catchAsyncErrors")
const sendToken = require("../utils/jwtToken")

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

        // Create new user
        const user = new User({
            name: name,
            email: email,
            password: password,
            avatar: {
                public_id: filename,
                url: fileUrl,
            },
        });

        await user.save();

        const activationToken = createActivationToken(user);

        const activationUrl = `http://localhost:3000/activation/${activationToken}`;

        try {
            await sendMail({
                email: user.email,
                subject: "Activate your account",
                message: `Hello ${user.name}, please click on the link to activate your account: ${activationUrl}`,
            });
            res.status(201).json({
                success: true,
                message: `Please check your email: ${user.email} to activate your account!`,
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
const createActivationToken = (user) => {
    const payload = {
        userId: user._id,
        email: user.email,
    };
    return jwt.sign(payload, process.env.ACTIVATION_SECRET, {
        expiresIn: "5m",
    });
};

//active user
router.post("/activation", catchAsyncErrors(async(req,res,next) => {
    try {
        const {activation_token} = req.body;
        const newUser = jwt.verify(activation_token, process.env, ACTIVATION_SECRET);
        if(!newUser){
            return next(new ErrorHandler("Invalid token!",400));
        }
        const {name, email,password,avatar} = newUser;
            User.create({
                name,
                email,
                avatar,
                password,
            });
            sendToken(newUser, 201, res);
    } catch (error) {
        return next(new ErrorHandler(error.message,500));
    }
}));

// Export the router
module.exports = router;
