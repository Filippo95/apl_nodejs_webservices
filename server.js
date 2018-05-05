const express = require('express');
const app = express();
const PORT = 80;
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "18.196.179.188",
  user: "root",
  password: "edef",
  database: "app-aplomb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/', (req, res) => {
  res.status(201)
    .send('Hello da JS.it');
});

app.get('/status', (req, res) => {
  res.status(200)
    .send({
      messaggio: `JS.it API è in ascolto alla porta ${PORT}`
    });
});

app.get('/corsi',(req,res)=>{
  res.status(200);
   con.query('Select * from corsis', function (err, result) {
    if (err) 
    throw err;
    
  res.setHeader('Access-Control-Allow-Origin', 'http://isaplomb.org')
  res.send(result)
  })

});
app.get('/Attivita',(req,res)=>{
  res.status(200);
   con.query('Select * from attivita', function (err, result) {
    if (err) 
    throw err;
    
  res.setHeader('Access-Control-Allow-Origin', 'http://isaplomb.org')
  res.send(result)
  })

});
app.get('/libri',(req,res)=>{
  res.status(200);
   con.query('Select * from libris', function (err, result) {
    if (err) 
    throw err;
    
  res.setHeader('Access-Control-Allow-Origin', 'http://isaplomb.org')
  res.send(result)
  })

});
app.get('/seminari',(req,res)=>{
  res.status(200);
   con.query('Select * from seminaris', function (err, result) {
    if (err) 
    throw err;
    
  res.setHeader('Access-Control-Allow-Origin', 'http://isaplomb.org')
  res.send(result)
  })

});
app.get('/cat_libri',(req,res)=>{
  res.status(200);
   con.query('Select * from cat_libris', function (err, result) {
    if (err) 
    throw err;
    
  res.setHeader('Access-Control-Allow-Origin', 'http://isaplomb.org')
  res.send(result)
  })

});

app.listen(process.env.PORT, () => {
  console.log(`Server in ascolto alla porta ${PORT}`);
});