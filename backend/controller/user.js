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
const { isAuthenticated } = require("../middleware/auth");
require('dotenv').config();



// Define the path to the uploads folder
const uploadsPath = path.join("C:\\Users\\Asus\\Desktop\\Nature_Trade\\NatureTrade_Group_Project_II", "uploads");

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
    const { name, email, password, role } = req.body;

    try {
        // Check if user already exists
        const userEmail = await User.findOne({ email });

        if (userEmail) {
            if (req.file) {
                const filename = req.file.filename;
                const filePath = path.join(uploadsPath, filename);

                // Delete the uploaded file
                fs.unlink(filePath, (err) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({ message: "Error deleting file" });
                    }
                });
            }
            return next(new ErrorHandler("User already exists", 400));
        }

        let userData;
        if (role === "seller" && req.file) {
            const filename = req.file.filename;
            const fileUrl = path.join("/uploads", filename); // Ensuring the correct file path

            userData = {
                name,
                email,
                password,
                role,
                avatar: {
                    public_id: filename,
                    url: fileUrl,
                },
            };
        } else {
            userData = { name, email, password, role };
        }

        const activationToken = createActivationToken(userData);

        const activationUrl = `http://localhost:3000/activation/${activationToken}`;

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
        console.error("An error occurred:", error);
        return next(new ErrorHandler("Internal Server Error", 500));
    }
});


// Create activation token
const createActivationToken = (userData) => {
    return jwt.sign(userData, process.env.ACTIVATION_SECRET, {
        expiresIn: "15m",
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

        const { name, email, password, avatar, role } = userData;

        // Check if user already exists
        const userEmail = await User.findOne({ email });

        if (userEmail) {
            return next(new ErrorHandler("User already exists", 400));
        }

        let user;
        if (role === "seller") {
            user = await User.create({
                name,
                email,
                password,
                role,
                avatar,
            });
        } else {
            user = await User.create({
                name,
                email,
                password,
                role,
            });
        }

        sendToken(user, 201, res);

    } catch (error) {
        console.error("Activation error:", error);
        return next(new ErrorHandler(error.message, 500));
    }
}));



router.post("/login-user", catchAsyncErrors(async (req, res, next) => {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
        return next(new ErrorHandler("Please provide all fields!", 400));
    }

    // Find user and include password and role in the selection
    const user = await User.findOne({ email }).select("+password +role");

    if (!user) {
        return next(new ErrorHandler("User does not exist!", 400));
    }

    // Check if the role provided matches the role in the database
    if (user.role !== role) {
        return next(new ErrorHandler("Not a valid user role!", 400));
    }

    // Validate password
    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
        return next(new ErrorHandler("Please provide a valid password", 400));
    }

    sendToken(user, 200, res);
}));



//load user
/*router.get("/getuser", isAuthenticated, catchAsyncErrors(async(req,res,next) => {
    try {
        const user = await User.findById(req.user.id);

        if(!user){
            return next(new ErrorHandler("User doesn't exists",400));
        }

        res.status(200).json({
            success:true,
            user,
        });

    } catch (error) {
        return next(new ErrorHandler(error.message,500));
    }
}));*/


// Export the router
module.exports = router;
