const db = require("../models");

const passport = require('passport');

exports.signup = function (req, res) {
   res.render('signup');
}
var exports = module.exports = {}

// Defining methods for the accountController
module.exports = {
  find: (req, res) => {
    if(req.isAuthenticated()){
      db.Account
      .findById(req.session.passport.user)
      .then(dbaccount => {
        res.json(dbaccount);
      })
      .catch(err => res.status(422).json(err));
    }
    res.status(401).json(err);  
  },
  create: (req, res) => {
    // const accountData = {
    //   first_name: req.body.first_name,
    //   last_name: req.body.last_name,
    //   fruit: req.body.fruit,
    //   userUUID:req.session.passport.user
    // }
    if(req.isAuthenticated()){
      db.Account
      .create(req.body, {userUUID:req.session.passport.user})
      .then(dbaccount => {
        res.json(dbaccount);
      })
      .catch(err => res.status(422).json(err));
    }
    res.status(401).json(err);  
  },
  update: (req, res) => {
    if(req.isAuthenticated()){
      db.Account
      .update(req.body,{ where: {userUUID: req.session.passport.user}})
      .then(dbaccount => {
        res.json(dbaccount);
      })
      .catch(err => res.status(422).json(err));
    }
    res.status(401).json(err);  
  }
};


// var exports = module.exports = {}

// // Controller route for signup
// exports.signup = function (req, res) {
//     res.json('registration');
// }

// // Controller route for signin
// exports.signin = function (req, res) {
//     res.json('login');
// }

// // Controller route for index
// exports.farmerdashboard = function (req, res) {
//     res.json('farmerdashboard');
// }

// // Controller route for godView
// exports.godView = function (req, res) {
//     res.render('godView');
// }

// // Controller route for godView
// exports.godViewAll = function (req, res) {
//     db.Musician.findAll({}).then(function (results) {

//         var placeHolder = [];
  
//         for (var i = 0; i < results.length; i++) {
//           placeHolder.push(results[i].dataValues);
//         }
  
//         var hbsObject = {
//           musicians: placeHolder
//         };

//         console.log(hbsObject);
    
//         res.render('godViewAll', hbsObject);
//       });
// }

// // Controller route for godView
// exports.godViewNew = function (req, res) {
//     res.render('godViewNew');
// }

// Controller route for logout
exports.logout = function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/');
    });
}