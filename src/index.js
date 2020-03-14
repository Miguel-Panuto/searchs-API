const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect('mongodb://simple_user:pbZ98wsoOWEUWgGi@devcluster-shard-00-00-y40dm.mongodb.net:27017,devcluster-shard-00-01-y40dm.mongodb.net:27017,devcluster-shard-00-02-y40dm.mongodb.net:27017/test?ssl=true&replicaSet=DevCluster-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();

app.use(express.json()); // Define that uses json before defining rotues!!!!!
app.use(routes);

app.listen(3333);