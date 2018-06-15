var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Kanban-Monk!');
});

app.listen(3000, function () {
  console.log('Listen 3000!');
});
