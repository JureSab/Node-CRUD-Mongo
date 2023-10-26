const mongoose = require('mongoose')
const Part = require('../models/Part')

const getAllParts = async(req,res) => {

    try{
        const allParts = await Part.find();
        res.status(200).json(allParts)
    }catch(err){
        res.status(400).json('Ooops there is a problem')
    }
}

const getSinglePart = async(req,res) => {

    try{
        const part = await Part.findById(req.params.id)
        res.status(200).json(part)
    }catch(err){
        res.status(400).json('Ooops there is a problem')
    }
}

const findPart = async(req,res) => {

    try{
        const query = Part.where({carName: req.body.search})
        const part = await query.find()
        if(part.length === 0){
            res.status(404).json({message:'There is no part with that name'})
        }else{
            res.status(200).json(part)
        }
        
    }catch(err){
        console.log(err)
        res.status(400).json('Ooops there is a problem')
    }
}

const addPart = async(req,res) => {

    try{
        const newPart = req.body
        const addPart = await Part.create(newPart);
        res.status(200).json({message:'New part created'})

    }catch(err){
        res.status(400).json('Ooops there is a problem')
    }
}

const editPart = async(req,res) => {
    try {
        const newPart = req.body
        const editedPart = await Part.findByIdAndUpdate(req.params.id,newPart)
        res.status(200).json({message:'Part edited'})
        
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

const deletePart = async(req,res) => {
    try {
        const deletePart = await Part.findByIdAndDelete(req.params.id)
        res.status(200).json({message:'Part deleted'})
        
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

module.exports = {getAllParts,getSinglePart,addPart,editPart,deletePart,findPart};