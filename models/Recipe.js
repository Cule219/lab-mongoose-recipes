const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let d = new Date();
const recipeSchema = new Schema({
  // TODO: write the schema
  title: {
    type: String,
    required: true,
    unique: true
  },
  level: {
    enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef']
  },
  ingredients: Array,
  cuisine: {
    type: String,
    required: true
  },
  dishType: {
    enum: ['Breakfast', 'Dish', 'Snack', 'Drink', 'Dessert', 'Other']
  },
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg"
  },
  duration: {
    type: Number, 
    min: 0
  },
  creator: String,
  created: {
    type: Date,
    default: d.getDate()
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
