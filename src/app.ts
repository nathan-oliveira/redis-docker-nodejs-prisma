import express from 'express';
import UserController from './controllers/UserController';
import redis from './lib/cache';

const app = express();

app.get('/', (req, res) => {
  res.send('Version 1.0');
})

app.get('/users', UserController.find);

app.get('/clear-cache', async (req, res) => {
  await redis.del('users:all');
  res.json({ ok: true });
})

app.listen(3000)