require('dotenv').config();
const express = require("express");
const app = express();
const db = require("./models");

const axios = require('axios');
const passport = require('passport');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session'); 

const routes = require("./routes");

const PORT = process.env.PORT || 3001;

require('./config/passport')(passport);


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


app.use(session({
  key: 'user_sid',
  secret: 'goN6DJJC6E287cC77kkdYuNuAyWnz7Q3iZj8',
  resave: true,
  saveUninitialized: false,
  cookie: {
      expires: 600000,
      httpOnly: false
  }
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());
// app.use(methodO("_method"));

app.use(routes);


// require("./routes/api-routes")(app);

// db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
// });

//Using session
app.use(session({
  key: 'user_sid',
  secret: 'goN6DJJC6E287cC77kkdYuNuAyWnz7Q3iZj8',
  resave: true,
  saveUninitialized: false,
  cookie: {
    expires: 600000,
    httpOnly: false
  }
}));