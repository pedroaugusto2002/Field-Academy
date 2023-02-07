const cors = require('cors');
const express = require('express');
app = express();
const books = require('./data/bibliotaca.json');

livros = [{
    id: 'id_do_livro',
    name: '',
    author_id: 2
},
{
    id: 'id_do_livro_2',
    name: '',
    author_id: 3
}]

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({extends: true}));

app.get('/books', (req, res)=>{
    return res.json(books);
});

app.post('/bookadd', (req, res)=>{
    books.push({...req.body});
    const response = {
        total: books.length,
        books 
    }
    return res.json(response);
})

app.put('/bookput/:id', (req, res) =>{
    const bookId = parseInt(req.params.id)
    res.json(bookId)
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


app.listen('3000')

console.log('Servidor ligado: http:/locahost:3000');