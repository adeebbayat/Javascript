const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true,"Setup is Required"]
    },
    punchline: {
        type: String,
        required:[true,"Punchline is Required"]
    }
});
 
const Joke = mongoose.model('Joke', JokeSchema);
 
module.exports = Joke;
