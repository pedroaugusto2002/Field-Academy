const mongoose = require('mongoose')
const Author = require('./Author')

const BookSchema = mongoose.Schema({
    title: {
        type: String, 
        require: true
    },
    id: {
        type: Number, 
        require: true
    },
    author: {
        type: Array, 
        require: false,
        default: null
    }
})

const Book = mongoose.model('Book',(BookSchema))

module.exports = Book

