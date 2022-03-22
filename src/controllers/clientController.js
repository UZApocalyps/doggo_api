const Client = require("../models/Client");

exports.clients = async function (req, res) {
  // #swagger.tags = ['Client']
  /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Clients" },
  } */
  const clients = await Client.findAll();
  res.send(clients);
};
exports.details = async function (req, res) {
  // #swagger.tags = ['Client']
  /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Client" },
  } */
  const client = await Client.findByPk(req.params.id);
  if (!client) res.status(404).send("Client not found");
  
  else res.send(response.dataValues);
  
};

exports.update = async function (req, res) {
    // #swagger.tags = ['Client']
    /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Client" },
      } */
  try {
    const client = await Client.findByPk(req.params.id);
    if (!client) throw new Error("Client not found");
    else {
      client.set(req.body);
      let response = await client.save();
      
      res.send(response.dataValues);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.create = async function (req, res) {
    // #swagger.tags = ['Client']
    /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Client" },
    } */
  try {
    const client = await Client.create(req.body);
    
    res.send(client);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.delete = async function (req, res) {
    // #swagger.tags = ['Client']

  try {
    await Client.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send("true");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
