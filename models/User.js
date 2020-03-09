const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: false,
    },
    password: {
        type: String,
        trim: false,
    },
});

module.exports = mongoose.model('User', UserSchema, 'User');
