var express = require('express');
var app = express();

let array = new Array;
var personas = {};

app.get('/:id', (req, res) => {
  console.log(req.params.id);
  array.push(req.params.id);
  res.send('Hello World!');
  console.log(array);
});

app.get('/:nombre/:edad', (req, res) => {
  personas.nombre=req.params.nombre;
  personas.edad=req.params.edad;
  res.send('Hello World!');
  console.log(personas);


});
