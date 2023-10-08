const mongoose = require('mongoose');
 
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Name is Required"]
    },
    age: {
        type: Number
    }
});
 
const User = mongoose.model('User', UserSchema);
 
module.exports = User;
