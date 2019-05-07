require("dotenv").config();
const axios = require("axios");
const db = require("../../models");
const path = require("path");
const farmerController = require("../../controllers/farmercontroller");

const router = require("express").Router();



// Routes


    
    
    // router.get("/:prod_Name", farmerController.findfarmersByProduce);
    // // this will return all farmers by produce.



    // router.get("/user/:UserType", farmerController.findUsers);
    // // this will return all users by User type.



    // router.get("/user/store/product/:Prod_Name/price/:price", farmerController.findStoresByInventoryAndPrice);

    // // this will return stores by product and price

    router.get("/user", farmerController.getUser);

    router.put("/user", farmerController.updateUser);

    router.get("/produce", farmerController.findfarmersByProduce);


    // this will create new user

    // router.post("/user", farmerController.insertUsers);
    // this will create new user


    // router.post("/store", farmerController.insertStores);
    //  this will create new store

    
    // app.put("api/user",farmerController.updateUsers);
    
   
    // app.put("api/inventory/:Inventory",farmerController.updateUsers);

    //router.get("api/store/:prod_Name", farmerController.findStoresByInventory);
    // this will return all stores by produce.

module.exports = router;
