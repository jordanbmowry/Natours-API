//"type": "module", in package.json allows es6 modules syntax
import express from 'express';
import fs from 'fs';

const app = express();

const tours = JSON.parse(fs.readFileSync(`./dev-data/data/tours-simple.json`));

app.get('/api/v1/tours', (req, res) => {
  res
    .status(200)
    .json({ status: 'success', results: tours.length, data: { tours } });
});

export default app;
