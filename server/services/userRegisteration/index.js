// user-service/index.js
const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

let users = [];

// Example endpoint
app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).send(user);
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`User service running on port ${port}`);
});
