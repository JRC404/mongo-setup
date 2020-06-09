/**
 * models folder - schema store
 * user.js - schema - structure for our database
 * - what should our user db look like
 * - should it have email, name, password, shoe size
 * 
 * index.js - data that we want to add to our schema
 * 
 * mongodb - mongoose - npm i mongoose
 * 
 */

require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect(`${process.env.databaseURL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// for PD... what on earth unified Topology means in the context of mongoose

const dean = new User({
    name: 'Dean',
    email: 'deansingleton@dean.com',
    password: 'ilovejacob'
})

dean.save();