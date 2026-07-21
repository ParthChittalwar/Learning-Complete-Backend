const express = require("express");

const app = express();

app.use(express.json());

const notes = [];

app.post('/notes' , (req,res) => {

    console.log(req.body);

    notes.push(req.body);

    res.status(201).json({
        message : "Notes Created Successfully"
    });
});

app.get("/notes" , (req,res) => {
    res.status(200).json({
        message : "Notes fetch Sucessfully",
        notes : notes
    });

    console.log(notes);
});

app.delete("/notes/:index" , (req,res) => {

    const index = req.params.index;

    delete notes [index];

    res.status(200).json({

        message : "Note Deleted Successfully"
    });

    console.log(notes);
});


app.patch("/notes/:index" , (req,res) => {

    const index = req.params.index;

    const description = req.body.description;

    notes [ index ].description = description;

    res.status(200).json({

        message : "Notes Updated Succesfully"
    });

    console.log(notes);
});

module.exports = app;

