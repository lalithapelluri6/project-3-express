require("dotenv").config();
const axios = require("axios");
const db = require("../../models");
const path = require("path");
const farmerController = require("../../controllers/farmercontroller");

const router = require("express").Router();



// Routes


module.exports = function (app) {
    
    
    app.get("api/farmer/:prod_Name", farmerController.findfarmersByProduce);
    // this will return all farmers by produce.



    app.get("api/user/:UserType", farmerController.findUsers);
    // this will return all users by User type.



    app.get("api/user/store/product/:Prod_Name/price/:price", farmerController.findStoresByInventoryAndPrice);

    // this will return stores by product and price


    app.post("api/user", farmerController.insertUsers);
    // this will create new user


    app.post("api/store", farmerController.insertStores);
    //  this will create new store

    
    // app.put("api/user",farmerController.updateUsers);
    
   
    // app.put("api/inventory/:Inventory",farmerController.updateUsers);

    app.get("api/store/:prod_Name", farmerController.findStoresByInventory);
    // this will return all stores by produce.

   
// 
//  put (api/farmer/;product/sell/;num/store/;id)
//  update return(id) num
//  update store (id)

//  api/farmer/Inventory/;productName   (shows me all the product farmers have x)

// put api/farmer/Inventory  (shows me all the farmers inventory)








    //     app.get("api/farmer/:id", (req, res) => {

    //         //  will return specific users
    //     });



    //     app.put("api/farmer/:id", (req, res) => {
=======
//     // // the root route leads to /api/farmers/

//     // app.get("/", farmerController.find);

//     app.get("api/User/:id", (req, res) => {

//         //  will return specific users
//     });

//     app.post("api/User/:id", (req, res) => {

//         // this will create new user

//     });
 
//     app.post("register", (req, res) => {
//         console.log(res);
//         console.log(req);
//         // this will create new user

//     });

//     app.put("api/User/:id", (req, res) => {

//         // this will update specific user

//     });

//     app.delete("api/User/:id", (req, res) => {

//         // this will delete specific user

//     });

    
//     // *********************************************


//     app.get("api/farmer/produce", (req, res) => {

//         // this will return all produce belong to specific user

//     });

//     app.get("api/User/:id/produce/:id", (req, res) => {

//         // this will return specific produce belong to specific user


//     });


    //         // this will update specific user


    //     });

    //     app.delete("api/farmer/:id", (req, res) => {

    //         // this will delete specific usre
=======
//     app.post("api/User/:id/produce/:id", (req, res) => {

//         // this will create new produce for specific User

//     });


    //     });


   //     // *********************************************


    //     app.get("api/farmer/:id/produce", (req, res) => {
=======
//     app.put("api/User/:id/produce/:id", (req, res) => {

//         // this will update specific produce for specific User

//     });


    //         // this will return all produce belong to specific user


    //     });

    //     app.get("api/farmer/:id/produce/:id", (req, res) => {

    //         // this will return specific produce belong to specific user


    //     });


    //     app.post("api/farmer/:id/produce/:id", (req, res) => {

    //         // this will create new produce for specific User

    //     });



    //     app.put("api/farmer/:id/produce/:id", (req, res) => {

    //         // this will update specific produce for specific User

    //     });

=======
//     app.delete("api/User/:id/produce/:id", (req, res) => {

//         // this will delete specific produce for specific User

//     });


// // // *********************************************

// // app.get("api/farmer/:id/store", (req, res) => {
// //     //  this will return all store belong to sepecific farmer

// // });

// // app.get("api/farmer/:id/store/:id", (req, res) => {

// //     //  this will return specific store belong to sepecific farmer
// // });

// // app.post("api/farmer/:id/store/:id", (req, res) => {

// //     // this will create new store for specific farmer

// // });

// // app.put("api/farmer/:id/store/:id", (req, res) => {

// //     // this will update specific store belong to specific farmer

// // });


    //     app.delete("api/farmer/:id/produce/:User_id", (req, res) => {


    //         // this will delete specific produce for specific User

    //     });

    // // // *********************************************
=======
// // app.delete("api/farmer/:id/store/id", (req, res) => {

// //     // this will delete specific store belong to specific farmer

// // });


    // app.get("api/farmer/:id/store", (req, res) => {
    //     //  this will return all store belong to sepecific farmer

    // });


    // app.get("api/farmer/:id/store/:id", (req, res) => {

    //     //  this will return specific store belong to sepecific farmer
    // });

    // app.post("api/farmer/:id/store/:id", (req, res) => {

    //     // this will create new store for specific farmer

    // });

    // app.put("api/farmer/:id/store/:id", (req, res) => {

    //     // this will update specific store belong to specific farmer
=======
// //     //  For stores*************************************

// //     app.get("api/store/", (req, res) => {

// //         // this will return all stores

// //     });

// //     app.get("api/store/:id", (req, res) => {

// //         // this will return a specific store

// //     });


    // });



    // app.delete("api/farmer/:id/store/id", (req, res) => {

    //     // this will delete specific store belong to specific farmer

    // });



    //     //  For stores*************************************

    //     app.get("api/store/", (req, res) => {

    //         // this will return all stores

    //     });

    //     app.get("api/store/:id", (req, res) => {

    //         // this will return a specific store

    //     });


    //     app.post("api/store/:id", (req, res) => {

    //         // this will create new store

    //     });

    //     app.put("api/store/:id", (req, res) => {

    //         // this will update specific store

    //     });

    //     app.delete("api/store/:id", (req, res) => {

    //         // this will delete specific store

    //     });


    //     // **************************************

    //     app.get("api/store/:id/farmer", (req, res) => {

    //         // this will return  farmers belong to specific store

    //     });

    //     app.get("api/store/:id/farmer/:id", (req, res) => {

    //         // this will return a specific farmer belong to specific store

    //     });

    //     app.post("api/store/:id/farmer/:id", (req, res) => {

    //         // this will create new farmer for specific store

    //     });

    //     app.put("api/store/:id/farmer/:id", (req, res) => {

    //         // this will update specific farmer belong to specific store

    //     });


    //     app.delete("api/store/:id/farmer/id", (req, res) => {

    //         // this will delete specific farmer belong to specific store

    //     });

    //     // ***************************************************



    //     app.get("api/store/:id/produce", (req, res) => {

    //         // this will return all produce belong to specific store

    //     });

    //     app.get("api/store/:id/produce/:id", (req, res) => {

    //         // this will return specific produce belong to specific store

    //     });


    //     app.post("api/store/:id/produce/:id", (req, res) => {

    //         // this will create new produce for specific store

    //     });



    //     app.put("api/store/:id/produce/:id", (req, res) => {

    //         // this will update specific produce for specific store

    //     });


    //     app.delete("api/store/:id/produce/:id", (req, res) => {

    //         // this will delete specific produce from specific store

    //     });

// //     app.post("api/store/:id", (req, res) => {

// //         // this will create new store

// //     });

// //     app.put("api/store/:id", (req, res) => {

// //         // this will update specific store

// //     });

// //     app.delete("api/store/:id", (req, res) => {

// //         // this will delete specific store

// //     });
    

// //     // **************************************

// //     app.get("api/store/:id/farmer", (req, res) => {

// //         // this will return  farmers belong to specific store

// //     });

// //     app.get("api/store/:id/farmer/:id", (req, res) => {

// //         // this will return a specific farmer belong to specific store

// //     });

// //     app.post("api/store/:id/farmer/:id", (req, res) => {

// //         // this will create new farmer for specific store

// //     });

// //     app.put("api/store/:id/farmer/:id", (req, res) => {

// //         // this will update specific farmer belong to specific store

// //     });


// //     app.delete("api/store/:id/farmer/id", (req, res) => {

// //         // this will delete specific farmer belong to specific store

// //     });

// //     // ***************************************************



// //     app.get("api/store/:id/produce", (req, res) => {

// //         // this will return all produce belong to specific store

// //     });

// //     app.get("api/store/:id/produce/:id", (req, res) => {

// //         // this will return specific produce belong to specific store

// //     });


// //     app.post("api/store/:id/produce/:id", (req, res) => {

// //         // this will create new produce for specific store

// //     });



// //     app.put("api/store/:id/produce/:id", (req, res) => {

// //         // this will update specific produce for specific store

// //     });


// //     app.delete("api/store/:id/produce/:id", (req, res) => {

// //         // this will delete specific produce from specific store

// //     });









//  }


}



