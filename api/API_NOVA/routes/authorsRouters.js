router = require('express').Router()

const Book = require('../models/Book')
const Author = require('../models/Author')
const express = require('express')


router.use(express.json())

router.post('/', async (req, res) =>{
    const {name, id, books} = req.body

    if(!name){
        res.status(422).json({message: "Envie os dados corretamente"})
    }

    const author = {
        name,
        id,
        books
    }

    try {
         await Author.create(author)
        res.status(200).json({message: "Sucesso"})

    } catch (error) {
        res.status(500).json({error: "ou"})
    }
})

router.get('/:id', async(req, res) =>{
    const authorId = req.params.id

    if(!authorId){
        res.status(400).json({message: "Verifique os dados e tente novamente"})
    }

    try {
        
        const author = Author.findOne({id : authorId})

    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.get('/', async (req, res) =>{

    try {
        const authors = await Author.find()

        res.status(200).json({authors})
    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.patch('/:id', async (req, res) =>{
    const authorId = req.params.id
    const {name, id, books} = req.body
    const author = {
        name, 
        id,
        books,
    }


    if(!authorId){
        res.status(400).json({message: "Autor não encontrado"})
    }
    try {
        const updateAuthor = await Author.updateOne({id : authorId}, author)
        if(updateAuthor.matchedCount === 0){
            res.status(500).json({message: "Erro"})
        }
        res.status(200).json({author})
        
    } catch (error) {
        res.status(500).json({error:"error"})
    }
      
})

router.delete('/:id', async(req, res) =>{

    const authorId = req.params.id
    const author = await Author.findOne({id: authorId})

    if(!author){
        res.status(400).json({error: "error"})
    }

    try {
        
        await Author.deleteOne({id: authorId})
        res.status(200).json({message:"Sucesso"})

    } catch (error) {
        res.status(400).json({error: "error"})
    }
})

module.exports = router