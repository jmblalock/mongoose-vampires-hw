const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/mongoose-vampires-hw';
const db = mongoose.connection;

mongoose.connect(connectionString, {
    userNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

db.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`);
});

db.on('error', (err) => {
    console.log(`Mongoose connected error ${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

module.exports = {
    Vampire: require('./vampire'),
};