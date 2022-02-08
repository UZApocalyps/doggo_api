const consultation = require("../models/consultations");
const Sequelize = require('sequelize');

var DataTypes = require("sequelize").DataTypes;

exports.getAll = function(req, res) {
    consultation.findAll()
        .then((value) => { 
            res.status(200).json(JSON.stringify(value)) 
        })
        .catch((error) => {
            res.status("404").json({error: error})
        });
}