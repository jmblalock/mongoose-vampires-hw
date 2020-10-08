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

// 1. are from New York, New York, US or New Orleans, Louisiana, US

// db.Vampire.find({$or: [{location: 'New York, New York, US'}, {location: 'New Orleans, Louisiana, US'}]}, 
//     (error, foundVamps) => { 
//     if (error) return error;
    
//     console.log(foundVamps);

//     process.exit();
// });

// 2. love brooding or being tragic

// db.Vampire.find({$or: [{loves: 'brooding'}, {loves: 'being tragic'}]}, 
//     (error, foundVamps) => { 
//     if (error) return error;
    
//     console.log(foundVamps);

//     process.exit();
// });

// 3. have more than 1000 victims or love marshmallows

// db.Vampire.find({$or: [{victims: {$gt: 1000}}, {loves: 'marshmallows'}]}, 
//     (error, foundVamps) => { 
//     if (error) return error;
    
//     console.log(foundVamps);

//     process.exit();
// });

// 4. have red hair or green eyes

// db.Vampire.find({$or: [{hair_color: 'red'}, {eye_color: 'green'}]}, 
//     (error, foundVamps) => { 
//     if (error) return error;
    
//     console.log(foundVamps);

//     process.exit();
// });

/////////////////////////////////////////////////
//### Select objects that match one of several values

// 1. love either frilly shirtsleeves or frilly collars

// db.Vampire.find({$or: [{loves: 'frilly shirtsleeves'}, {loves: 'frilly collars'}]}, 
//     (error, foundVamps) => {
//     if (error) return error;
    
//     console.log(foundVamps);

//     process.exit();
// });

// 2. love brooding

// db.Vampire.find({loves: 'brooding'}, 
//     (error, foundVamps) => {
//     if (error) return error;
    
//     console.log(foundVamps);

//     process.exit();
// });

// 3. love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music

// db.Vampire.find({$or: [{loves: 'appearing innocent'}, {loves: 'trickery'}, {loves: 'lurking in   rotting mansions'}, {loves: 'R&B music'}]}, 
//     (error, foundVamps) => {
//     if (error) return error;
    
//     console.log(foundVamps);

//     process.exit();
// });

// 4. love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *

// db.Vampire.find({$and: [{loves: 'fancy cloaks'}, {loves: {$nin: ['top hats', 'virgin blood']}}]}, 
//     (error, foundVamps) => { 
//     if (error) return error;
    
//     console.log(foundVamps);

//     process.exit();
// });

/////////////////////////////////////////////////
//### Negative Selection

// 1. love ribbons but do not have brown eyes

// db.Vampire.find({$and: [{loves: 'ribbons'}, {eye_color: {$nin: ['brown']}}]}, 
//     (error, foundVamps) => { 
//     if (error) return error;
    
//     console.log(foundVamps);

//     process.exit();
// });

// 2. are not from Rome

// db.Vampire.find({location: {$nin: 'Rome'}}, 
//     (error, foundVamps) => { 
//     if (error) return error;
    
//     console.log(foundVamps);

//     process.exit();
// });

// 3. do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]

// db.Vampire.find({loves: {$nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']}}, 
//     (error, foundVamps) => { 
//     if (error) return error;
    
//     console.log(foundVamps);

//     process.exit();
// });

// 4. have not killed more than 200 people

// db.Vampire.find({victims: {$lt: 200}}, 
//     (error, foundVamps) => { 
//     if (error) return error;
    
//     console.log(foundVamps);

//     process.exit();
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

// 1. Replace the vampire called 'Claudia' with a vampire called 'Eve'.

// db.Vampire.findOneAndReplace({name: 'Claudia'},
//     {name:'Eve', dob: new Date(3, 12, 7, 8, 3), hair_color: 'brunette', eye_color: 'green', loves: ['ribbons'], location: 'Houston, Texas, US',gender: 'f', victims: 1},
//     {new: true},
//     (error, foundVamps) => { 
//     if (error) return error;
        
//     console.log(foundVamps);
        
//     process.exit();
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

// 2. Update 'Eve' to have a gender of 'm'

// db.Vampire.findOneAndUpdate({name: 'Eve'}, 
//     {gender: 'm'},
//     {new: true},
//     (err, updatedVamp) => {
//     if (err) return err;
//     console.log(updatedVamp);
//     process.exit();
// });

// 3. Rename 'Eve's' name field to 'moniker'

// db.Vampire.findOneAndUpdate({name: 'Eve'}, 
//     {name: 'moniker'},
//     {new: true},
//     (err, updatedVamp) => {
//     if (err) return err;
//     console.log(updatedVamp);
//     process.exit();
// });

// 4. We now no longer want to categorize female gender as "f", but rather as fems. Update all females so that the they are of gender "fems".

// db.Vampire.updateMany({gender: 'f'}, 
//     {gender: 'fems'},
//     {new: true},
//     (err, updatedVamp) => {
//     if (err) return err;
//     console.log(updatedVamp);
//     process.exit();
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

// 1. Remove a single document wherein the hair_color is 'brown'

// db.Vampire.findOneAndDelete(
//     {
//         hair_color: 'brown'
//     }, 
//     {},
//     (err, updatedVamp) => {
//     if (err) return err;
//     console.log(updatedVamp);
//     process.exit();
// });

// 2. We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.

// db.Vampire.remove({eye_color: 'blue'},
//     (err, updatedVamp) => {
//     if (err) return err;
//     console.log(updatedVamp);
//     process.exit();
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
