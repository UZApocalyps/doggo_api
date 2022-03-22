const Breed = require("../models/Breed");


exports.breeds = async function (req, res) {
    // #swagger.tags = ['Breed']
    /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Breeds" },
  } */
  const breeds = await Breed.findAll();
  res.send(breeds);
};
exports.details = async function (req, res) {
    // #swagger.tags = ['Breed']
    /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Breed" },
  } */
  const breed = await Breed.findByPk(req.params.id);
  if (!breed) res.status(404).send("Breed not found");
  else res.send(response.dataValues);
};

exports.update = async function (req, res) {
    // #swagger.tags = ['Breed']
    /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Breed" },
      } */
  try {
    const breed = await Breed.findByPk(req.params.id);
    if (!breed) throw new Error("Breed not found");
    else {
      breed.set(req.body);
      let response = await breed.save();
      res.send(response.dataValues);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.create = async function (req, res) {
    // #swagger.tags = ['Breed']
    /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Breed" },
    } */
  try {
    const breed = await Breed.create(req.body);
    res.send(breed);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.delete = async function (req, res) {
    // #swagger.tags = ['Breed']
  try {
    await Breed.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send("true");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
