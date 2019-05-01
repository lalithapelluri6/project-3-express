require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// const mongoose = require("mongoose");

// mongoose.connect(mongoURL, {useNewUrlParser: true})
//   .then(() => {
//     console.log("Successfully connected to mongoDB.");
//   })
//   .catch((err) => {
//     console.log(`Error connecting to mongoDB: ${err}`);
//   });

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



// Init passport authentication 
app.use(passport.initialize());
// persistent login sessions. Session expires after 6 months, or when deleted by user 
app.use(passport.session());


require("./routes/user-api-routes")(app);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});