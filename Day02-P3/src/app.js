const express = require('express');

const app = express();


const notes = []

app.use(express.json())

app.post('/notes' , (req,res) => {
    console.log(req.body);
    notes.push(req.body)
    res.status(201).json({
        message : "Note Added Successfully"
    })
    
})

app.get('/notes' , (req,res) => {
    res.status(200).json({
        message : "Notes fetched Successfully",
        notes
    })

})
    
app.delete('/notes/:id' , (req,res) => {
    const id = req.params.id
    res.status(200).json({
        message : "Note Deleted Successfully",
        notes
    })
})
   

app.patch('/notes/:id' , (req,res) => {
    const id = req.params.id
    res.status(200).json({
        message : "Note Updated Successfully",
        notes
    })
})





module.exports = app