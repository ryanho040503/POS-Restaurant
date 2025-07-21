const createHttpError = require('http-errors');
const User = require('../models/userModel'); // Assuming you have a User model defined

const registerUser = async (req, res, next) => {

    console.log("📥 Request đã vào controller registerUser"); // ✅ Dòng test

    try {
        const { name, phone, email, password, role } = req.body;

        if(!name || !phone || !email || !password || !role) {
            const error = createHttpError(400, "All fields are required");
            return next(error);
        }

        const isUserPresent = await User.findOne({ email });

        if (isUserPresent) {
            const error = createHttpError(400, "User already exists");
            return next(error);
        }

        const user = await User.create({ name, phone, email, password, role });
        const newUser = User(user);
        await newUser.save();
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: newUser
        });


    } catch (error) {
        next(error);
    }
}

const login = async (req, res, next) => {

}

module.exports = { registerUser, login };