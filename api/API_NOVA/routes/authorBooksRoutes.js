router = require('express').Router()

const Book = require('../models/Book')
const Author = require('../models/Author')
const express = require('express')


router.use(express.json())

router.patch('/:bookId/:authorId', async (req, res)=>{
    const bookId = req.params.bookId
    const authorId = req.params.authorId

    if(!bookId | !authorId){
        res.status(400).res.json({message: "Dados necessarios não inseridos"})
        return
    }

    const book = await Book.findOne({id: bookId})
    const author = await Author.findOne({id: authorId})

    const bookExistInAuthor = author.books.find(bookExists => bookExists.id === book.id)
    if(bookExistInAuthor) {
        res.status(400).json({message: "Já existe um relacionamento."})
        return
    } 
    const updateAuthor = {
        name: author.name,
        id: author.id,
        books: [...author.books, book]
    }
    const updateBook = {
        title: book.title,
        id: book.id,
        author:{name:author.name, id:author.id}
    }

    if(!book | !author){
        res.status(400).json({message: "Autor ou Livro não encontrado."})
        return
    }

    try {
        await Author.updateOne({id: authorId}, updateAuthor)
        res.status(200).json({updateAuthor})
        await Book.updateOne({id: bookId}, updateBook)
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
    
})

module.exports = router