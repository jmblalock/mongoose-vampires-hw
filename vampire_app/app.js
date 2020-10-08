// 1. Require Mongoose
const mongoose = require('mongoose');
// 2. Require your Model
const Vampire = require('./models/vampire');
// 3. Require your extra data source
const vampireData = require('./populateVampires');
// 4. Connect your database
const db = require('./models');
const { exists } = require('./models/vampire');
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// Vampire.collection.insertMany(vampireData, (err, data) => {
//     if (err) return console.log(err);
//     console.log("added provided vampire data")
// });
// ### Add some new vampire data
// const newVampire1 = {
//     name: 'Vladislav',
//     hair_color: 'brown',
//     eye_color: 'brown',
//     dob: new Date(971, 2, 1, 7, 7),
//     loves: ['nothing'],
//     location: 'Austin, Texas, US',
//     gender: 'm',
//     victims: 9999
//     }

// const newVampire2 = {
//     name: 'Petyr',
//     dob: new Date(37, 0, 4, 1, 0),
//     hair_color: 'black',
//     eye_color: 'black',
//     loves: ['no one'],
//     location: 'Transylvania, Romania',
//     gender: 'm',
//     victims: 23889
//     }

// const newVampire3 = {
//     name: 'Jenna',
//     dob: new Date(56, 8, 7, 2, 10),
//     hair_color: 'blonde',
//     eye_color: 'blonde',
//     loves: ['blood'],
//     location: 'Nyírbátor, Hungary',
//     gender: 'f',
//     victims: 980
//     }

// const newVampire4 = {
//     name: 'Nadja',
//     dob: new Date(70, 1, 9, 1, 4),
//     hair_color: 'blue',
//     eye_color: 'blue',
//     loves: ['graveyards'],
//     location: 'Auvergne, France',
//     gender: 'f',
//     victims: 324
//     }

// db.Vampire.create(newVampire1, (err, createdVampire) => {
//     if (err) {
//         console.log('QUERY ERROR', err);
//         console.log(createdVampire);
//     } else {
//         console.log(createdVampire);
//     }
//     process.exit();
// });

// db.Vampire.create(newVampire2, (err, createdVampire) => {
//     if (err) {
//         console.log('QUERY ERROR', err);
//         console.log(createdVampire);
//     } else {
//         console.log(createdVampire);
//     }
//     process.exit();
// });

// db.Vampire.create(newVampire3, (err, createdVampire) => {
//     if (err) {
//         console.log('QUERY ERROR', err);
//         console.log(createdVampire);
//     } else {
//         console.log(createdVampire);
//     }
//     process.exit();
// });

// db.Vampire.create(newVampire4, (err, createdVampire) => {
//     if (err) {
//         console.log('QUERY ERROR', err);
//         console.log(createdVampire);
//     } else {
//         console.log(createdVampire);
//     }
//     process.exit();
// }); 

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

// 1. Find all the vampires that that are females

// db.Vampire.find({gender: 'f'}, (error, foundVamps) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(foundVamps);
//     }
//     process.exit();
// });

// 2. have greater than 500 victims

// db.Vampire.find({victims: {$gt: 500}}, (error, foundVamps) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(foundVamps);
//     }
//     process.exit();
// });

// 3. have fewer than or equal to 150 victims

// db.Vampire.find({victims: {$lte: 150}}, (error, foundVamps) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(foundVamps);
//     }
//     process.exit();
// });

// 4. have a victim count is not equal to 210234

// db.Vampire.find({victims: {$ne: 210234}}, (error, foundVamps) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(foundVamps);
//     }
//     process.exit();
// });

// 5. have greater than 150 AND fewer than 500 victims

// db.Vampire.find({victims: {$gt: 150, $lt: 500}}, (error, foundVamps) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(foundVamps);
//     }
//     process.exit();
// });


/////////////////////////////////////////////////
// ### Select by exists or does not exist

// 1. have a title property

// db.Vampire.find({title: {$exists: true}}, (error, foundVamps) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(foundVamps);
//     }
//     process.exit();
// });

// 2. do not have a victims property

// db.Vampire.find({victims: {$exists: false}}, (error, foundVamps) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(foundVamps);
//     }
//     process.exit();
// });

// 3. have a title AND no victims

// db.Vampire.find( { $and: [ { title: { $exists: true } }, { victims: { $exists: false } } ] }, (error, foundVamps) => {
//     if (error) return error;

//     console.log(foundVamps);

//     process.exit();
// });

// 4. have victims AND the victims they have are greater than 1000

// db.Vampire.find({$and: [{victims:{$exists: true}}, {victims: {$gt: 1000}}]}, 
//     (error, foundVamps) => { 
//     if (error) return error;
    
//     console.log(foundVamps);

//     process.exit();
// });

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
