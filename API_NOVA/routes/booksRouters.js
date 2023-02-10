router = require('express').Router()

const Book = require('../models/Book')
const Author = require('../models/Author')
const express = require('express')


router.use(express.json())

//create
router.post('/', async (req, res) =>{

    const {title, id} = req.body

    if(!title){
        res.status(422).json({error: 'Dados obrigatorios'})
        return
    }
    
    const book = {
        title,
        id,
    }

    try {
        
        await Book.create(book)
        res.status(201).json({message:'Livro inserido com sucesso'})

    } catch (error) {
        res.status(500).json({error: error})
    }

})

//read
router.get('/', async (req, res) =>{
    try {
        const books = await Book.find()
        res.status(200).json({books})
    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.get('/:id', async (req, res) =>{
    const bookid = req.params.id

    try {

        const book = await Book.findOne({id: bookid})

        if(!book){
            res.json('Livro não encontrado')
            return
        }

        res.status(200).json(`Titulo:${book.title} id:${book.id}`)
        
    } catch (error) {
        res.status(500).json({error: error})
    }
})

//update PUT PATCH
router.patch('/:id', async (req, res) =>{
    const bookid = req.params.id

    const {title, id} = req.body

    const book = {
        title,
        id
    }

    if(!title){
        res.status(422).json({error: 'Error: verifique os dados e tente novamente'})
        return
    }
    try {

        const updateBook = await Book.updateOne({id:bookid}, book)

        if(updateBook.matchedCount === 0){
            
            res.status(500).json({message: "Falha ao atualizar"})
        }

        res.status(200).json({book})
        
    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.delete('/:id', async (req, res) =>{
    const bookid = req.params.id

    const book = await Book.findOne({id: bookid})

    if(!book){
        res.json('Livro não encontrado')
        return
    }

    try {
        
        await Book.deleteOne({id:bookid})
        res.status(200).json({message: "Livro removido com sucesso"})

    } catch (error) {
        res.status(500).json({error: error})
    }


})



module.exports = router