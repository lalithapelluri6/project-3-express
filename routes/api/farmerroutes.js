require("dotenv").config();
const axios = require("axios");
const db = require("../../models");
const path = require("path");
const farmerController = require("../../controllers/farmercontroller");

const router = require("express").Router();



// Routes


module.exports = function (app) {
    
    
    router.get("api/farmer/:prod_Name", farmerController.findfarmersByProduce);
    // this will return all farmers by produce.



    router.get("api/user/:UserType", farmerController.findUsers);
    // this will return all users by User type.



    router.get("api/user/store/product/:Prod_Name/price/:price", farmerController.findStoresByInventoryAndPrice);

    // this will return stores by product and price


    router.post("api/user", farmerController.insertUsers);
    // this will create new user


    router.post("api/store", farmerController.insertStores);
    //  this will create new store

    
    // app.put("api/user",farmerController.updateUsers);
    
   
    // app.put("api/inventory/:Inventory",farmerController.updateUsers);

    router.get("api/store/:prod_Name", farmerController.findStoresByInventory);
    // this will return all stores by produce.

}
