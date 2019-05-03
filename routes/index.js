const path   = require("path");
const router = require("express").Router();

const apiRoutes 	 = require("./api");
const passportRoutes = require("./passport/passport.js");

// API Routes
router.use("/api", apiRoutes);

// PSSPORT Routes
// router.use("/", passportRoutes);

router.use("/", function handler(app) {

    app.post("register", (req, res) => {
        console.log(res);
        console.log(req);
        // this will create new user
      
      });

});



// If no API routes are hit, send the React app
// router.use((req, res) =>
//   res.sendFile(path.join(__dirname, "../../client/build/index.html"))
// );

module.exports = router;

