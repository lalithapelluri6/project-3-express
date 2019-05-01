require("dotenv").config();
const axios = require("axios");
const db = require("../models");
const path = require("path");

module.exports = function (app) {

    app.get("api/farmer", (req, res) => {

        // this will return all farmers

    })

    app.get("api/farmer/id", (req, res) => {

        //  will return specific farmers
    })

    app.get("api/store", (req, res) => {
        //  this will return all store

    })

    app.get("api/store/id", (req, res) => {

        //  this will return specific farmers
    })

    app.get("api/produce", (req, res) => {

        // this will return all produce

    })

    app.get("api/produce/id", (req, res) => {

        // this will return specific produce

    })



    app.post("api/farmer/id", (req, res) => {

        // this will create new farmer

    })

    app.post("api/store/id", (req, res) => {

        // this will create new store

    })

    app.post("api/produce/id", (req, res) => {

        // this will create new produce

    })


    app.put("api/farmer/id", (req, res) => {

        // this will update specific farmer

    })


    app.put("api/store/id", (req, res) => {

        // this will update specific store

    })


    app.put("api/produce/id", (req, res) => {

        // this will update specific produce

    })

    app.delete("api/farmer/id", (req, res) => {

        // this will delete specific farmer

    })

    app.delete("api/store/id", (req, res) => {

        // this will delete specific store

    })

    app.delete("api/produce/id", (req, res) => {

        // this will delete specific produce

    })



}