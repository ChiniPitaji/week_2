
const express = require('express');
const port = 3000;
const app = express();

app.get('/', function(req, res){
    let a=0;
    console.log("request has been reached");
    for(let i=0; i<1000000000; i++){
        a+=i;
    }
    res.send('Hello World!');
});

app.listen(port, function() {
    console.log(`Server is running on http://localhost:${port}`);
});