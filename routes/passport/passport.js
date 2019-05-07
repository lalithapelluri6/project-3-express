const router   = require("express").Router();
const passport = require('passport');


// =====================================
// LOGIN ===============================
// =====================================

// process the login form
router.post('/signin', (req, res, next) => {
  console.log("/auth//signin get route hit")
  passportAuthenticate('local-login', req, res, next);
});

// =====================================
// SIGNUP ==============================
// =====================================

// process the signup form
router.post('/signup', (req, res, next) => {
  passportAuthenticate('local-signup', req, res, next);
});

// =====================================
// passport local strategy =============
// =====================================

passportAuthenticate = (localStrategy, req, res, next) => {
  passport.authenticate(localStrategy, function(err, user, info) {
    if (err) {
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status
    if (! user) {
      return res.send({ success : false, message : 'authentication failed' });
    }

    // ***********************************************************************
    // "Note that when using a custom callback, it becomes the application's
    // responsibility to establish a session (by calling req.login()) and send
    // a response."
    // Source: http://passportjs.org/docs
    // ***********************************************************************
    else{
      req.login(user, loginErr => {
        if (loginErr) {
          console.log("loginerr", loginErr)
          return next(loginErr);
        }
        console.log("\n##########################");
        console.log(req.isAuthenticated());
        console.log('sucess');
        console.log(req.session.passport.user);
        console.log("##########################");
        console.log("\n")

        res.cookie('user_email', user.email );
        res.cookie('authenticated', "true" );

        return res.json(true);
      });
    }
  })(req, res, next);
}


// =====================================
// LOGOUT ==============================
// =====================================

router.get('/logout', (req, res) => {
    //req.logout();
     req.session.destroy(err => {
      req.logout();
      res.clearCookie("user_sid");
      res.clearCookie("user_email");
      res.clearCookie("authenticated");
      res.json(false);
    });
});

module.exports = router;



// needed to secure passwords
// var bCrypt = require('bcrypt');
// var passport = require('passport');

// module.exports = function (passport,farmer) {
//     // Inside this block, we initialize the passport-local strategy, and the user model, which will be passed as an argument.
//     var Users = farmer;
//     var LocalStrategy = require('passport-local').Strategy;

//     // Serialize function to save the user id to the session
//     passport.serializeUser(function (user, done) {
//         done(null, user.id);
//     });

//     // deserialize user 
//     passport.deserializeUser(function (id, done) {
//         done(null, id);
//     });

//     // Then we define our custom strategy with our instance of the LocalStrategy like this:
//     passport.use('local-signup', new LocalStrategy(
//         {
//             usernameField: 'email',
//             passwordField: 'password',
//             passReqToCallback: true // allows us to pass the entire request to the callback, which is particularly useful for signing up.
//         },
//         // Callback function to handle storing user's details
//         function (req, email, password, done) {
//             // First, we add our hashed password generating function inside the callback function.
//             var generateHash = function (password) {
//                 return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
//             };
//             // Then, using the Sequelize user model we initialized earlier as User, we check to see if the user already exists, and if not we add them.
//             User.findOne({
//                 where: {
//                     userName: userName
//                 }
//             }).then(function (farmer) {
//                 if (farmer) {
//                     return done(null, false, {
//                         message: 'That username is already taken'
//                     });
//                 } else {
//                     var farmerPassword = generateHash(password);
//                     // Below, notice that the values in the data object are gotten from the req.body object which contains the input from our signup form. 
//                     var data =
//                     {
//                       userName: req.body.userName,
//                       userType: req.body.userType,
//                       zipcode: req.body.zipcode,
//                       city:  req.body.city,
//                       address: req.body.address,
//                       phone: req.body.phone,
//                       email: req.body.email
//                     };
//                     // User.create() is a Sequelize method for adding new entries to the database. Notice that the values in the data object are gotten from the req.body object which contains the input from our signup form. 
//                     Users.create(data).then(function (newMusician, created) {
//                         if (!newUser) {
//                             return done(null, false);
//                         }

//                         if (newUser) {
//                             return done(null, newUser);
//                         }
//                     });
//                 }
//             });
//         }
//     ));


//     //LOCAL SIGNIN
//     passport.use('local-signin', new LocalStrategy(
//         {
//             // by default, local strategy uses username and password, we will override with email
//             usernameField: 'userName',
//             passwordField: 'password',
//             passReqToCallback: true // allows us to pass back the entire request to the callback, which is particularly useful for signing up.
//         },
//         function (req, email, password, done) {

//             var Farmer = farmer;

//             // The isValidPassword function compares the password entered with the bCrypt comparison method since we stored our password with bcrypt. If details are correct, user will sign in
//             var isValidPassword = function (userpass, password) {
//                 return bCrypt.compareSync(password, userpass);
//             }
//             Farmer.findOne({
//                 where: {
//                     userName: userName
//                 }
//             }).then(function (farmer) {
               
//                 if (!farmer) {
//                     return done(null, false, {
//                         message: 'Email does not exist'
//                     });
//                 }
//                 if (!isValidPassword(musician.userPassword, password)) {
//                     return done(null, false, {
//                         message: 'Incorrect password.'
//                     });
//                 }

//                 var farmerInfo = farmer.get();
                
//                 return done(null, farmerInfo);

//             }).catch(function (err) {
//                 console.log("Error:", err);
//                 return done(null, false, {
//                     message: 'Something went wrong with your Signin'
//                 });
//             });
//         }));
// }