const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const { animals } = require('./data/animals');

function findById(id, animalsArray) {
  const result = animalsArray.filter((animal) => animal.id === id)[0];
  return result;
}

app.get('/api/animals', (req, res) => {
  let results = animals;
  console.log(req.query);
  res.json(results);
});

app.get('/api/animals/:id', (req, res) => {
  const result = findById(req.params.id, animals);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

app.listen(PORT, () => {
  console.log(`API server now on port $(PORT)!`);
});
