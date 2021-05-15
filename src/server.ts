/* eslint-disable no-console */
import express from 'express';
import { createConnection } from 'typeorm';
import { Routes } from './routes';

createConnection().then(() => {
  const server = express();
  server.use(express.json());

  const routes = new Routes();
  server.use(routes.routes);

  server.listen(3333, () => { return console.log('Server started at http://localhost:3333'); });
}).catch((err) => {
  console.log(err);
});
