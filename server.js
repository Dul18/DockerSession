var express = require('express');

var app = express();

var port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log('server is running on port 4000');
});
