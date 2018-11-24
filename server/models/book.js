const mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [1, 'Name is shorter than the minimum allowed length']
    },
    genre: {
        type: String,
        required: true,
        minlength: [1, 'Genre is shorter than the minimum allowed length']
    },
    _authorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Author'
    }
});

var Book = mongoose.model('Book', bookSchema);

module.exports = { Book };