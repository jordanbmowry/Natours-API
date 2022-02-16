/* eslint-disable import/extensions */
//"type": "module", in package.json allows es6 modules syntax
import express from 'express';
import morgan from 'morgan';
import path from 'path';
// routers
import usersRouter from './routes/userRoutes.js';
import toursRouter from './routes/tourRoutes.js';
import 'dotenv/config';

const app = express();
// middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(path.join('public')));

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// routes
app.use('/api/v1/tours', toursRouter);
app.use('/api/v1/users', usersRouter);

export default app;
