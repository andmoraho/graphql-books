const mongoose = require('mongoose');

var authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [1, 'Name is shorter than the minimum allowed length']
    },
    age: {
        type: Number,
        required: true
    }
});

var Author = mongoose.model('Author', authorSchema);

module.exports = { Author };