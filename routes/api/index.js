const router = require("express").Router();

const Farmer 	= require("./farmerroutes");
const Store = require("./storeRoutes");


router.use("/farmers", Farmer);

router.use("/stores", Store);



module.exports = router;
