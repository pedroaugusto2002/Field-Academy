const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/Book');
const app = express();
const booksRoutes = require('./routes/booksRouters')
const authorRoutes = require('./routes/authorsRouters')
const authorBooksRouter = require('./routes/authorBooksRoutes')
mongoose.set("strictQuery", true);

const book = require('./models/Book')

app.use('/author-book', authorBooksRouter)
app.use('/author',  authorRoutes)
app.use('/books', booksRoutes)

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

