
const express = require('express');
const port = 3000;
const app = express();

app.get('/route-handler', function(req, res){
    //header,body,query parameters
    //do machine learning model
    res.json({
        name:"kumar",
        age:21
    })
})

app.get('/', function(req, res){
    res.send('Hello World!');
});

app.listen(port, function() {
    console.log(`Server is running on http://localhost:${port}`);
});