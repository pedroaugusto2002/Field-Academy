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
    books:{
        type: Array,
        require: false,
        default:"Nenhum livro registrado"
    }
})


const Author = mongoose.model('Author',(AuthorSchema))

module.exports = Author