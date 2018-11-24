var express = require('express');
var app = express();

//Define
app.get('/about', function(req, res){
    res.send('About us');
});

app.get('/', function(req, res){
    res.send('Home');
});

app.get('/products', function(req, res){
    res.send('products');
});

//Port
app.listen(3000, () => console.log("App is listening on port 3000"));
//npm install express --save