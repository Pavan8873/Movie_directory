const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    movie_name: {
        type: String,
        required: true,
        //unique: true
    },
    rating: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});


const User = mongoose.model('User', userSchema);

module.exports = User;