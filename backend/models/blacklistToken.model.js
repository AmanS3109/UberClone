const mongoose = require('mongoose');

const BlacklistTokenSchema = new mongoose.Schema({
    token: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now, expires: 345600 },
});

module.exports = mongoose.model('BlacklistToken', BlacklistTokenSchema);