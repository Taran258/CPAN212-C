// routes.js
const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.send(`
    <h2>Welcome to Lab 2 Express Server</h2>
    <ul>
      <li><a href="/name">/name</a></li>
      <li><a href="/greeting">/greeting</a></li>
      <li><a href="/add?x=5&y=3">/add?x=5&y=3</a></li>
      <li><a href="/calculate?a=2&b=3&operation=*">/calculate?a=2&b=3&operation=*</a></li>
    </ul>
  `);
});

// /name
router.get('/name', (req, res) => {
  res.send('Your Name: Taran');
});

// /greeting
router.get('/greeting', (req, res) => {
  res.send('Hello, Taran! Student Number: N01717614');
});

// /add?x=5&y=3
router.get('/add', (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);
  if (isNaN(x) || isNaN(y)) {
    return res.send('Invalid numbers. Use ?x=5&y=3');
  }
  res.send(`Result: ${x + y}`);
});

// /calculate?a=2&b=3&operation=*
router.get('/calculate', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  const op = req.query.operation;

  if (isNaN(a) || isNaN(b)) {
    return res.send('Invalid numbers. Use ?a=2&b=3&operation=*');
  }

  let result;
  switch (op) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/': result = b !== 0 ? a / b : 'Division by zero'; break;
    case '**': result = a ** b; break;
    default: return res.send('Invalid operation. Use +, -, *, /, **');
  }

  res.send(`Result: ${result}`);
});

module.exports = router;
