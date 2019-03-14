const express = require('express');
const app = express();
app.get('/project', (req, res) => {
  res.json(require('./data.json'))
})
app.listen('8081', () => {
  console.log('mock data at 8081');

})