// server.js
const express = require('express');
const app = express();
const routes = require('./routes');

const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
