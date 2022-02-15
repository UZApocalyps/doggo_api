const Client = require("../models/clients");

exports.clients = async function (req, res) {

    let clients = await Client.findAll();

    res.send(clients)
}
exports.details = async function (req, res) {

    const client = await Client.findByPk(1);
    
    res.send(JSON.stringify(client))
}

exports.update = function (req, res) {

}

exports.create = function (req, res) {

}

exports.delete = function (req, res) {

}