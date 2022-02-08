const Client = require("../models/clients");
const Sequelize = require('sequelize');

var DataTypes = require("sequelize").DataTypes;

exports.index = function(req, res){
    Client.findAll().then((value)=>{res.status(200).json(JSON.stringify(value))}).catch(()=>res.status("502"));
}