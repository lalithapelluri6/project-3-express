const db = require("../models");

const passport = require('passport');

// Defining methods for the UserController
module.exports = {
  // auth: (req, res) =>(req.isAuthenticated())? res.json(true) : res.json(false),
  // find: (req, res) => {
  //   if(req.isAuthenticated()){
  //     db.User
  //     .findById(req.session.passport.user)
  //     .then(dbUser => res.json(dbUser))
  //     .catch(err => res.status(422).json(err));
  //   }
  //   res.status(401).json(err);  
  // },
  // delete: (req, res) => {
  //   if(req.isAuthenticated()){
  //     db.User
  //     .findById({ uuid: req.session.passport.user })
  //     .then(dbUser => dbUser.remove())
  //     .then(dbUser => {
  //       db.Account
  //       .find({where:{ userUUID: req.session.passport.user }})
  //       .then(dbAccount => dbAccount.remove())
  //       .then(dbUser => res.json(true))
  //       .catch(err => res.status(422).json(err));
  //     })
  //     .catch(err => res.status(422).json(err));
  //   }
  //   res.status(401).json(err);  
  // },
  findUsers: (req,res) => {
    db.Users.findAll({
      where: {
        userType: 'Farmer',
      }
    }).then(data => {
      res.json(data);
    }).catch(err => {
      console.log(err);
    })
  },
  findStoreUsers: (req,res) => {
    db.Users.findAll({
      where: {
        userType: 'Store',
      }
    }).then(data => {
      res.json(data);
    }).catch(err => {
      console.log(err);
    })
  },
  findfarmersByProduce: (req,res) => {
    db.Produces.findAll({
      where: {
      prod_Name: req.params.id     
      },
      include: [{
        model: db.Users,
        where: {
          userType: 'Farmer',
        }
      }]
    }).then((data) => {
      res.json(data);
      console.log("findby farmers by produce:" + data);
    }).catch(err => {
      console.log(err);
    });         
  },

  findStoresByInventory: (req,res) => {
    db.Produces.findAll({
      where: {
        prod_Name: req.params.id,
      },
      include: [{
        model: db.Users,
      
        where: {
          userType:'Store'
        }
          // price: req.params.price
        }],
      
    }).then(data => {
      res.json(data);
    }).catch(err => {
      console.log(err);
    }); 
  },
  insertFarmers: (req,res) => {
    if (req.isAuthenticated())
    db.Users.create({
        userName: req.body.userName,
        userType: req.body.userType,
        zipcode: req.body.zipcode,
        city:  req.body.city,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email
      
    }).then(data => {
      res.json(data);
    });
  },
  u: function (req,res){
    db.Users.findAll({})
    .then(function(u){
      res.json(u)
    });
  },
 insertStores: (req,res) => {
  if (req.isAuthenticated())
   db.Users.create({
       userName: req.body.userName,
       userType: req.body.userType,
       zipcode: req.body.zipcode,
       city:req.body.city,
       address: req.body.address,
       phone: req.body.phone,
       email:req.body.email
   }).then(data => {
     res.json(data);
     console.log("insertStores:" + data);
   });
 }
};
