const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');

const todoRoute = require('./routes/todoRoute');
dotenv.config();

const app = express();

app.use(express.json());

app.use(morgan('dev'));


app.use('/', todoRoute);

const port = 3000 || process.env.PORT;

const DB = process.env.DATABASE;
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('DB connection successful!'));


const server = app.listen(port, () => {
  console.log('Server is running on port', port);
});

