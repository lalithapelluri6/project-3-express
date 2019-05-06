const path   = require("path");
const router = require("express").Router();

const farmerRoutes 	 = require("./api/farmerroutes.js");
const passportRoutes = require("./passport/passport.js");

// API Routes
router.use("/api", farmerRoutes);

// PSSPORT Routes
router.use("/", passportRoutes);

// If no API routes are hit, send the React app
// router.use((req, res) =>
//   res.sendFile(path.join(__dirname, "../../client/build/index.html"))
// );

module.exports = router;

// var express = require('express');
// var passport = require('passport');
// // var routes = require('./routes/index')(app, passport);

// module.exports = function (app, passport) {
//   /* GET home page. */
//   app.get('/login', function(req, res, next) {
//     res.render('index', { title: 'Express' });
//   });
//   app.get('/registration', function(req, res, next) {
//     res.render('MerchantRegistrationForm', { title: 'Express' });
//   });

//   app.post('/registration', passport.authenticate('registration'), {
//     successRedirect: '/merchantdashboard',
//     faliureRedirect: '/MerchantRegistrationForm',
//     faliureFlash: true // allows flash message
//   }), function(req, res, err) {
//     console.log(req)
//   };

// }