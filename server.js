require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const app = express();

app.use(cors());
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json());


app.post('/weather/zip', (req, res) => {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${req.body.zip},us&appid=${process.env.APPID}&units=imperial`)
  .then(data => data.text())
  .then(data => res.send(data))
  .catch(err => console.log("ERROR", err))
})

app.listen(3000, () => console.log('Now listening on port 3000'));