
// const express = require('express');
// const port = 3001;
// const app = express();

// app.post('/conversations', function(req, res){
//     // res.send('<b>hi there</b>');
//     // console.log(req.headers)
//     console.log(req.body); //it's undefined because we need to use body-parser middleware to parse the request body
//     res.send({
//         msg:"2+2=4"
//     })
// })

// app.listen(port, function() {
//     console.log(`Example app listening on port ${port}`)
// })


//------------------------------------



const express = require('express');
const port = 3000;
const app = express();
const bodyParser = require("body-parser");
//middlewares
app.use(bodyParser.json());
//npm install body-parser

app.post('/backend-api/conversations', function(req, res){
    const message = req.body.message;
    console.log(message);
    res.send('Hello World!');
});

app.listen(port, function() {
    console.log(`Server is running on http://localhost:${port}`);
});


//npm install nodemon