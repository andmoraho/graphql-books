var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/graphqlbooks', { useNewUrlParser: true });

mongoose.connection.once('open', () => {
    console.log('Connected to DB.');
});

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = { mongoose };