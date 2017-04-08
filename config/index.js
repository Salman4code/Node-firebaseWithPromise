/**
 *
 * @module config
 * */
var firebase = require("firebase");
var config = {
   apiKey: "AIzaSyCIqDrMjXYjtZj8aMYcC5C4qXI18LOkaeM",
   authDomain: "myfirstdatabase-489ed.firebaseapp.com",
   databaseURL: "https://myfirstdatabase-489ed.firebaseio.com",
   projectId: "myfirstdatabase-489ed",
   storageBucket: "myfirstdatabase-489ed.appspot.com",
   messagingSenderId: "94068879185"
 };
firebase.initializeApp(config);
module.exports = firebase ;

