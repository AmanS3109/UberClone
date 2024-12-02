const userModel = require('../models/user.model');

module.exports.createUser = async ({ email, firstname, lastname,  password }) => {
    if (!email || !firstname || !password) {
        throw new Error('All fields are required');
    }
    const user = userModel.create({ email, fullname: { firstname, lastname }, password });
}