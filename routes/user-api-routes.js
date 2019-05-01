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