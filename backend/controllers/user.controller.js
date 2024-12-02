const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');


module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { email, firstname, lastname, password } = req.body;
        const hashedPassword = await userModel.hashPassword(password);
        await userService.createUser({ email, firstname, lastname, password: hashedPassword });
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        next(error);
    }
}