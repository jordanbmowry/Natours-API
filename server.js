import app from './app.js';

const { PORT = 8000 } = process.env;

const listener = () => console.log(`Listening on Port ${PORT}!`);

app.listen(PORT, listener);
