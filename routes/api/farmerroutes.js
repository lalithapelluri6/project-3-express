require("dotenv").config();
const axios = require("axios");
const db = require("../../models");
const path = require("path");
const router = require("express").Router();
const farmerController = require("../../controllers/farmercontroller");


// Routes


    router.get("/farmers", farmerController.findUsers);
    router.get("/stores", farmerController.findStoreUsers);


    router.get("/farmers/:id", farmerController.findfarmersByProduce);

        //  will return specific users


    router.post("api/User/:id", (req, res) => {

        // this will create new user

    });

    router.post("registeration", (req, res) => {
        console.log(res);
        console.log(req);
        // this will create new user

    });

    router.put("api/User/:id", (req, res) => {

        // this will update specific user

    });

    router.delete("api/User/:id", (req, res) => {

        // this will delete specific user

    });


    // *********************************************


    router.get("api/farmer/produce", (req, res) => {

        // this will return all produce belong to specific user

    });

    router.get("/stores/:id", farmerController.findStoresByInventory);

    router.get("api/User/:id/produce/:id", (req, res) => {

        // this will return specific produce belong to specific user


    });


    router.post("api/User/:id/produce/:id", (req, res) => {

        // this will create new produce for specific User

    });



    router.put("api/User/:id/produce/:id", (req, res) => {

        // this will update specific produce for specific User

    });


    router.delete("api/User/:id/produce/:id", (req, res) => {

        // this will delete specific produce for specific User

    });


// // *********************************************

// router.get("api/farmer/:id/store", (req, res) => {
//     //  this will return all store belong to sepecific farmer

// });

// router.get("api/farmer/:id/store/:id", (req, res) => {

//     //  this will return specific store belong to sepecific farmer
// });

// router.post("api/farmer/:id/store/:id", (req, res) => {

//     // this will create new store for specific farmer

// });

// router.put("api/farmer/:id/store/:id", (req, res) => {

//     // this will update specific store belong to specific farmer

// });


// router.delete("api/farmer/:id/store/id", (req, res) => {

//     // this will delete specific store belong to specific farmer

// });



//     //  For stores*************************************

//     router.get("api/store/", (req, res) => {

//         // this will return all stores

//     });

//     router.get("api/store/:id", (req, res) => {

//         // this will return a specific store

//     });


//     router.post("api/store/:id", (req, res) => {

//         // this will create new store

//     });

//     router.put("api/store/:id", (req, res) => {

//         // this will update specific store

//     });

//     router.delete("api/store/:id", (req, res) => {

//         // this will delete specific store

//     });


//     // **************************************

//     router.get("api/store/:id/farmer", (req, res) => {

//         // this will return  farmers belong to specific store

//     });

//     router.get("api/store/:id/farmer/:id", (req, res) => {

//         // this will return a specific farmer belong to specific store

//     });

//     router.post("api/store/:id/farmer/:id", (req, res) => {

//         // this will create new farmer for specific store

//     });

//     router.put("api/store/:id/farmer/:id", (req, res) => {

//         // this will update specific farmer belong to specific store

//     });


//     router.delete("api/store/:id/farmer/id", (req, res) => {

//         // this will delete specific farmer belong to specific store

//     });

//     // ***************************************************



//     router.get("api/store/:id/produce", (req, res) => {

//         // this will return all produce belong to specific store

//     });

//     router.get("api/store/:id/produce/:id", (req, res) => {

//         // this will return specific produce belong to specific store

//     });


//     router.post("api/store/:id/produce/:id", (req, res) => {

//         // this will create new produce for specific store

//     });



//     router.put("api/store/:id/produce/:id", (req, res) => {

//         // this will update specific produce for specific store

//     });


//     router.delete("api/store/:id/produce/:id", (req, res) => {

//         // this will delete specific produce from specific store

//     });

module.exports = router;






