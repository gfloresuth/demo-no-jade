var pug = require('pug');
var express = require('express');

app = express();
const PORT=3000;


app.set('view engine', 'pug');
app.use('/assets/',express.static(__dirname+"/assets"));


app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});



app.listen(PORT,function(){

});