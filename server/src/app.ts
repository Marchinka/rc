// lib/app.ts
import express = require('express');
import userHandler from "./routes/userHandler";

// Create a new express application instance
const app = express();
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/user', userHandler);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});