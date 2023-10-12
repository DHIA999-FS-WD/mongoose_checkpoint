// distract schema and model from mongoose
const { Schema, model } = require("mongoose");
// creat schema for Person
const personSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  age: Number,
  favoriteFoods: {
    type: [String],
    require: true,
  },
});
// export model of Person
module.exports = Person = model("Person", personSchema);
