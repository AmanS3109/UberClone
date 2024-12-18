const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model');


module.exports.registerUser = async (req, res, next) => {
    // Validate input fields
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, fullname, password } = req.body;

    try {
        // Check if the email already exists in the database
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        // Hash the password
        const hashedPassword = await userModel.hashPassword(password);

        // Create a new user with hashed password
        const user = await userService.createUser({
            email,
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            password: hashedPassword
        });

        // Generate an auth token for the user (if applicable)
        const token = user.generateAuthToken();

        // Respond with success message and the generated token
        res.status(201).json({ token, user, message: 'User registered successfully' });

    } catch (error) {
        // Handle any errors that occur during registration
        console.error(error);
        next(error);  // Pass the error to the error-handling middleware
    }
}

module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

        const { email, password } = req.body;
        const user = await userModel.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = user.generateAuthToken();

        res.cookie('token', token);

        res.status(200).json({ token, user, message: 'User logged in successfully' });
}

module.exports.getUserProfile = async (req, res, next) => {
    res.status(200).json(req.user);
}

module.exports.logoutUser = async (req, res, next) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    await blacklistTokenModel.create({ token });
    res.status(200).json({ message: 'User logged out successfully' });
}