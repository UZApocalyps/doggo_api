const Dog = require("../models/Dog");

exports.dogs = async function (req, res) {
  // #swagger.tags = ['Dog']
  /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Dogs" },
  } */
  const dogs = await Dog.findAll();
  res.send(dogs);
};
exports.details = async function (req, res) {
  // #swagger.tags = ['Dog']
  /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Dog" },
  } */
  const dog = await Dog.findByPk(req.params.id);
  if (!dog) res.status(404).send("Dog not found");
  else res.send(response.dataValues);
};

exports.update = async function (req, res) {
  // #swagger.tags = ['Dog']
  /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Dog" },
  } */
  try {
    const dog = await Dog.findByPk(req.params.id);
    if (!dog) throw new Error("Dog not found");
    else {
      dog.set(req.body);
      let response = await dog.save();
      res.send(response.dataValues);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.create = async function (req, res) {
  // #swagger.tags = ['Dog']
  /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Dog" },
  } */
  try {
    const dog = await Dog.create(req.body);
    res.send(dog);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.delete = async function (req, res) {
  // #swagger.tags = ['Dog']
  try {
    await Dog.destroy({
      where: {
        id: req.params.id,
      },
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
