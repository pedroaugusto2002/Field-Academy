const mongoose = require('mongoose')

const AuthorSchema = mongoose.Schema({
    name: {
        type: String, 
        require: true
    },
    id: {
        type: Number, 
        require: true
    },
    books:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Book', 
        require: false,
        default: null
    }] 
})

    


const Author = mongoose.model('Author',(AuthorSchema))