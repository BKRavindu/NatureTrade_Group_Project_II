const express = require("express");
const path = require("path");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const ErrorHandler = require("../utils/ErrorHandler");
const User = require("../model/user");
const jwt = require("jsonwebtoken");

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
                } else {
                    console.log("File deleted successfully!");
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
            
        } catch (error) {
           return next(new ErrorHandler(err.message, 500)); 
        }

    } catch (error) {
        console.error("An error occurred:", error);
        return next(new ErrorHandler("Internal Server Error", 500));
    }
});

//create activation Token
const createActivationToken = (user) => {
    return jwt.sign(user, process.env.ACTIVATION_SECRET, {
        expiresIn: "5m",
    })
}

module.exports = router;
