const Client = require("../models/clients");

exports.clients = function (req, res) {

    let clients = Client.findAll();
    res.send()
}
exports.details = function (req, res) {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id)
}

exports.update = function (req, res) {

}

exports.create = function (req, res) {

}

exports.delete = function (req, res) {

}