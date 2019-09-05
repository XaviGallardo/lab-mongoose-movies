const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'ironMovies';

mongoose
  .connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true })
  .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch((err) => console.error('Error connecting to mongo', err));

const celebrities = [
  {
    name: 'Tom Cruise',
    occupation: 'Actor',
    catchPhrase: 'Your mission is imposible!!',
  },
  {
    name: 'Beyonce',
    occupation: 'Singer',
    catchPhrase: 'You have to dance!!',
  },
  {
    name: 'Michael Jordan',
    occupation: 'Retired',
    catchPhrase: 'You fail all shots you never made',
  },
];

Celebrity.create(celebrities)
  .then((celebrity) => {
    console.log(`Celbrity inserted: ${celebrity}`);
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log(error);
    mongoose.connection.close();
  });
