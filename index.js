const express = require("express");
const app = express();
// i require doten to import PORT from dotev file
require("dotenv").config();
// require connectDB module
const connectDB = require("./config/db");
connectDB();
// import Person  Model
const Person = require("./models/person");
const person = require("./models/person");

//                              i create Many Records with model.create()
// Person.create([
//   { name: "dhia", age: 22, favoriteFoods: ["Burger"] },
//   { name: "ahmed", age: 25, favoriteFoods: ["Pizza"] },
//   { name: "zyed", age: 30, favoriteFoods: ["Fries"] },
// ])
//   .then((res) => {
//     console.log("created persons:", res);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

//                              i Use model.find() to Search my Database and find all document
// Person.find()
//   .then((res) => {
//     console.log("Find all the people", res);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

//                              i Use model.findOne() to Return a Single Matching Document from my Database. NT:'food as a search key'
// person
//   .findOne({ favoriteFoods: ["Burger"] })
//   .then((res) => {
//     console.log("the person who love Burger:", res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//                              i Use model.findById() to Search my Database By _id ('6527e2764dbebcc198eeaaaf').NT:'personId as the search key.'
// person
//   .findById("6527e2764dbebcc198eeaaaf")
//   .then((res) => {
//     console.log("the person who has the matched id:", res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//                              i  Update a document by Running Find, Edit to add 'hamburger' in the favoritFood field. NT: id('6527e2764dbebcc198eeaab0')
// const updatefavoriteFoods = async () => {
//   const person = await Person.findById("6527e2764dbebcc198eeaab0");
//   if (person) {
//     person.favoriteFoods.push("hamburger");
//     console.log(person);
//   } else {
//     console.log("i dont find the person");
//   }
// };
// updatefavoriteFoods();

//                              i  Perform New Updates on a Document Using model.findOneAndUpdate(). NT:Find a person by Name and set the person's age to 20.
//
// const updateAge = async () => {
//   const person = await Person.findOneAndUpdate(
//     { name: "dhia" },
//     { age: 20 },
//     //i should set the new option to true to return the document after update was applied.**1
//     { new: true }
//   );
//   if (person) {
//     console.log(person);
//     //**1
//     console.log("person age is :", person.age);
//   } else
//     (err) => {
//       console.log(err);
//     };
// };
// updateAge();

//                                 i Delete One Document Using model.findByIdAndRemove NT: id('6527e2764dbebcc198eeaaaf')
// const removePerson = async () => {
//   const person = await Person.findByIdAndRemove("6527e2764dbebcc198eeaaaf");
//   if (person) {
//     console.log("person removed");
//   } else {
//     console.log("person not found");
//   }
// };
// removePerson();

//                                 i MongoDB and Mongoose - Delete Many Documents with model.remove()

//step 1 i create 3 document with the name Mary and then i will remove all it
// Person.create([
//   { name: "Mary", age: 22, favoriteFoods: ["Burger"] },
//   { name: "Mary", age: 25, favoriteFoods: ["Pizza"] },
//   { name: "Mary", age: 30, favoriteFoods: ["Fries"] },
// ])
//   .then((res) => {
//     console.log("created persons:", res);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// step 2 i remove all document who have Name : Mary, NT: model.remove is not working so i change it by model.deletMany

// Person.deleteMany({ name: "Mary" })
//   .then((res) => {
//     console.log("documents removed", res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//                              i Chain Search Query Helpers to Narrow Search Results
// step 1 i create 3 document with favoriteFood is burritos

// Person.create([
//   { name: "peron1", age: 22, favoriteFoods: ["burritos"] },
//   { name: "porson2", age: 25, favoriteFoods: ["burritos"] },
//   { name: "porson3", age: 30, favoriteFoods: ["burritos"] },
// ])
//   .then((res) => {
//     console.log("created persons:", res);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// i will Find people who like burritos. Sort them by name, limit the results to two documents, and hide their age

// Person.find({ favoriteFoods: ["burritos"] })
//   .select({ name: 1, favoriteFoods: 1, _id: 0 }) // Select only name and favoriteFoods, and hide _id
//   .sort("name") // Sort by name
//   .limit(2) // Limit to 2 results
//   .exec()
//   .then((err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(data);
//     }
//   });
app.listen(process.env.PORT, () => {
  console.log("server run in PORT:", process.env.PORT);
});
