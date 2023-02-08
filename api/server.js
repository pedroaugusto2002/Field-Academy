const cors = require('cors');
const express = require('express');

const connectionString = 'mongodb+srv://pedroaugusto:pedro123@cluster0.f4zzscs.mongodb.net/?retryWrites=true&w=majority';

app = express();

const mongoose = require('mongoose');
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.emit('pronto')
    });

let books = require('./data/bibliotaca.json');


app.use(express.json());
app.use(cors());

app.use(express.urlencoded({extends: true}));

app.get('/books', (req, res)=>{
    return res.json(books);
});

app.post('/books', (req, res)=>{
    books.push({...req.body});
    const response = {
        total: books.length,
        books 
    }
    return res.json(response);
})

app.put('/books/:id', (req, res) =>{
    const bookId = parseInt(req.params.id)
    
    const book = books.find(book => book.id === bookId)
    if(!book){ 
        return res.json({error: "Usuario não encontrado"})
    }

    books.map(book => {
       if(book.id === bookId){
        book = req.body;
       }
       return book
    })
    const response = {
        total: books.length,
        books 
    }
    
    return res.json(response);
})

app.on('pronto', ()=>{
    app.listen(3000, ()=>{
        console.log('Aberto na porta http://localhost:3000')
    });
});


