const express = require('express');
const arabic2roman = require('./arabic2roman');
const app = express();

app.get('/convert/:number',(req,res)=>{

    number = req.params.number;  

    res.send({        
        result: arabic2roman.convert(number)});
});

module.exports = app;