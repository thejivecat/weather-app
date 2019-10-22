const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

app.use(cors());
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json());

app.get('/weather', (req, res) => {
  console.log('req.body', req.body);
  res.send('The data that will come to be')
})

app.listen(3000, () => console.log('Now listening on port 3000'));