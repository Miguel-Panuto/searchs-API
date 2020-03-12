import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

mongoose.connect('mongodb+srv://simple_user:Y1Tj3r8dZzaeRzRN@devcluster-y40dm.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();

app.use(routes);

app.listen(3333);