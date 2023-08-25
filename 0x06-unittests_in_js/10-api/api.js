const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  console.log(`${req.params.id}`)
  res.end(`Payment methods for cart ${req.params.id}`);
})
app.get('/available_payments:id([0-9]+)',(req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send({payment_methods: {credit_cards: true,paypal: false}});
})
app.post('POST /login', (req, res) => {
	let username = '';

  if (req.body) {
    username = req.body.userName;
  }

  res.send(`Welcome ${username}`);
})
app.listen(port, console.log(`API available on localhost port ${port}`));

module.exports = [app, port];
