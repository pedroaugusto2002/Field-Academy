const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
    title: {
        type: String, 
        require: true
    },
    id: {
        type: Number, 
        require: true
    },
    author: [{
        type: mongoose.Schema.Types.ObjectId, 
        require: false, 
        ref: 'Author',
        default: null
    }]
})

const Book = mongoose.model('Book',(BookSchema))

module.exports = Book

