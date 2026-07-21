

const express = require('express');

const app = express();

app.get('/' ,(req,res) =>{
    res.send(`
        <h1>This is Home Page</h1>
        <a href="/about"><button>Click To Go To About Page</button></a>
        <a href="/contact"><button>Click To Go To Contact Page</button></a>
        <h1>${new Date()}</h1>
        <h1>My Name is Parth Chittalwar</h1>
 `)
})

 app.get('/about' ,(req,res) => {
    res.send("This is About Page");
 })

 app.get('/contact' , (req,res) => {
    res.send("This is Contact Page")
 })

 app.listen(3000);