const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const { animals } = require('./data/animals');

app.get('/api/animals', (req, res) => {
  let results = animals;
  console.log(req.query);
  res.json(results);
});

app.listen(PORT, () => {
  console.log(`API server now on port $(PORT)!`);
});
