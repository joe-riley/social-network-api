const express = require('express');
const mongoose = require('./config/mongo_connection');
const db = require('./models');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('./routes'));

mongoose();

// setTimeout(() => {
//   console.log(`Ready State of MongoDB: ${conn.connection}`);
// }, 5000);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
