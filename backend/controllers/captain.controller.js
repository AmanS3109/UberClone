const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');



module.exports.registerCaptain = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullname, lastname, email, password, vehicle } = req.body;

    const isUserAlready = await captainModel.findOne({ email });
    if (isUserAlready) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashPassword = await captainModel.hashPassword(password);
    try {
        const captain = await captainService.createCaptain({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashPassword,
            color: vehicle.color,
            plate: vehicle.plate,
            brand: vehicle.brand,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType
        });
        const token = captain.generateAuthToken();
        res.status(201).json({ token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}