const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();

app.use(express.json()); // Define that uses json before defining rotues!!!!!
app.use(routes);

app.listen(process.env.PORT);