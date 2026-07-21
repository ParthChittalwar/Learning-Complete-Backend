const express = require('express');

const app = express();

app.get("/" , (req,res) => {
    res.send(`<h1>"Hello World"</h1>
        
        <a href="/contact"><button>Click To Go To Contact Page</button></a>
        
        <a href="/about"><button>Click To Go To About Page</button></a>
   ` );
    
});

app.get('/about' ,(req,res) =>{
    res.send("About Page");
});

app.get('/contact' , (req,res) => {
    res.send("This is Contact Page")
})



app.listen(3000);