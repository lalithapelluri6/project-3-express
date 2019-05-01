// ********************************************************************************* 
// user-api-routes.js - this file offers a set of routes for geting & sending user data to the various handlebars
//CRU - Create, Read & Update  DATA FOR USERS & SKILLS TABLE 
// *********************************************************************************

// Dependencies
// =============================================================

var db = require("../models");

//Using it to access the Sequelize in built operators to conditionally show data 
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//requiring passport for authentication purpose 
var passport = require('passport');

console.log("User Route file");

//View All codePals in the database 
app.get("/api/farmer", function (req, res) {

    //Passport Authentication is sucessfull then proceed further 
    if (req.isAuthenticated()) {
      console.log(true)
      console.log(req.session.passport.user);
      //Grabs the logged in user ID 
      var userId = req.session.passport.user.id;

      db.users.findAll({
        //Excluded the logged in user only activee members 
        where: {
            active: 1 , 
            //using the not operator of sequlize i.e example: userid NOT "1"
            [Op.not] : [{id: userId}]
          },
          //Include user skills too for all th members 
        include: [{
          model: db.skills, as: "skills"
        }] ,
      }).then(function (dbUsers) {
        var hbsObject = {
          users: dbUsers
        };
        console.log("Each user ", dbUsers.length);
        // console.log("Each user Skill", dbUsers.skills.length);
        //Returns the JSON OBJECT that holds data related to all users within each user an array of skills user has 
        res.render("allpals", hbsObject);
      });
    } else {
      //Failed Auth then login again 
      console.log("auth", req.isAuthenticated())
      res.redirect("/login")
    }

  });
