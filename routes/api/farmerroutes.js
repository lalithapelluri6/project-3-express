require("dotenv").config();
const axios = require("axios");
const db = require("../../models");
const path = require("path");

module.exports = function (app) {

    // For farmers******************

    app.get("api/farmer", (req, res) => {

        // this will return all farmers

        // db.Farmer.find().then(

    });

    app.get("api/farmer/:id", (req, res) => {

        //  will return specific farmers
    });

    app.post("api/farmer/:id", (req, res) => {

        // this will create new farmer

    });

    app.put("api/farmer/:id", (req, res) => {

        // this will update specific farmer

    });

    app.delete("api/farmer/:id", (req, res) => {

        // this will delete specific farmer

    });

    // *********************************************

    app.get("api/farmer/:id/store", (req, res) => {
        //  this will return all store belong to sepecific farmer

    });

    app.get("api/farmer/:id/store/:id", (req, res) => {

        //  this will return specific store belong to sepecific farmer
    });

    app.post("api/farmer/:id/store/:id", (req, res) => {

        // this will create new store for specific farmer

    });

    app.put("api/farmer/:id/store/:id", (req, res) => {

        // this will update specific store belong to specific farmer

    });


    app.delete("api/farmer/:id/store/id", (req, res) => {

        // this will delete specific store belong to specific farmer

    });

    // *********************************************


    app.get("api/farmer/:id/produce", (req, res) => {

        // this will return all produce belong to specific farmer

    });

    app.get("api/farmer/:id/produce/:id", (req, res) => {

        // this will return specific produce belong to specific farmer


    });


    app.post("api/farmer/:id/produce/:id", (req, res) => {

        // this will create new produce for specific farmer

    });



    app.put("api/farmer/:id/produce/:id", (req, res) => {

        // this will update specific produce for specific farmer

    });


    app.delete("api/farmer/:id/produce/:id", (req, res) => {

        // this will delete specific produce for specific farmer

    });





    //  For stores*************************************

    app.get("api/store/", (req, res) => {

        // this will return all stores

    });

    app.get("api/store/:id", (req, res) => {

        // this will return a specific store

    });


    app.post("api/store/:id", (req, res) => {

        // this will create new store

    });

    app.put("api/store/:id", (req, res) => {

        // this will update specific store

    });

    app.delete("api/store/:id", (req, res) => {

        // this will delete specific store

    });
    

    // **************************************

    app.get("api/store/:id/farmer", (req, res) => {

        // this will return  farmers belong to specific store

    });

    app.get("api/store/:id/farmer/:id", (req, res) => {

        // this will return a specific farmer belong to specific store

    });

    app.post("api/store/:id/farmer/:id", (req, res) => {

        // this will create new farmer for specific store

    });

    app.put("api/store/:id/farmer/:id", (req, res) => {

        // this will update specific farmer belong to specific store

    });


    app.delete("api/store/:id/farmer/id", (req, res) => {

        // this will delete specific farmer belong to specific store

    });

    // ***************************************************



    app.get("api/store/:id/produce", (req, res) => {

        // this will return all produce belong to specific store

    });

    app.get("api/store/:id/produce/:id", (req, res) => {

        // this will return specific produce belong to specific store

    });


    app.post("api/store/:id/produce/:id", (req, res) => {

        // this will create new produce for specific store

    });



    app.put("api/store/:id/produce/:id", (req, res) => {

        // this will update specific produce for specific store

    });


    app.delete("api/store/:id/produce/:id", (req, res) => {

        // this will delete specific produce from specific store

    });












}