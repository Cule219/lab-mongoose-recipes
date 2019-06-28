const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js');  // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose.connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });
// Recipe.collection.drop();
// data.forEach(e => Recipe.create(e).then(e => {console.log(e)}).catch(err=>{console.log(err)}))
// Recipe.insertMany(data);

Recipe.update({title: 'Rigatoni alla Genovese'},{duration: 100})
.then(e=>console.log('success').catch(e=>console.log(e)));
Recipe.deleteOne({title: 'Carrot Cake'})
.then(e=>{
  console.log(e);
  mongoose.connection.close();
}).catch(e=>console.log(e));

