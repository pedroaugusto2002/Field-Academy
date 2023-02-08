const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/Book');
const app = express();
mongoose.set("strictQuery", true);

const book = require('./models/Book')

app.use(
    express.urlencoded({
        extended: true,
    }),
    )

app.use(express.json())

const db_user = 'apidopedro';
const db_password = '1hOIBbA6VZkTdavv';

mongoose
.connect(`mongodb+srv://${db_user}:${db_password}@apicluster.59zwhzx.mongodb.net/myfirstapi?retryWrites=true&w=majority`)

.then(()=>{
    console.log('Conectados');
    app.listen(3333);
})

.catch((err)=>{
   console.log(err)
})

app.listen(3000);

app.post('/books', async (req, res) =>{

    const {title, id} = req.body

    if(!title){
        res.status(422).json({error: 'Dados obrigatorios'})
    }
    
    const book = {
        title,
        id
    }

    try {
        
        await Book.create(book)
        res.status(201).json({message:'Livro inserido com sucesso'})

    } catch (error) {
        res.status(500).json({error: error})
    }

})

app.get('/', (req, res) =>{
    res.json({message: 'Olá mundo'})
})
