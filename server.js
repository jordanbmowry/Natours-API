/* eslint-disable import/extensions */
import mongoose from 'mongoose';
import app from './app.js';

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connection successful!');
  });

const { PORT = 8000 } = process.env;

// eslint-disable-next-line no-console
const listener = () => console.log(`Listening on Port ${PORT}!`);

app.listen(PORT, listener);
