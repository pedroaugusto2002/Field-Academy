const mongoose = require('mongoose')
const Book = mongoose.model('Book', {
    title: String,
    id: Number,
    author:{
        nameAuthor: String,
        id: Number
    }

})

module.exports = Book

