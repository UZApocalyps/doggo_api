const Breed = require("../models/Breed");

exports.breeds = async function (req, res) {
  const breeds = await Breed.findAll();
  res.send(breeds);
};
exports.details = async function (req, res) {
  const breed = await Breed.findByPk(req.params.id);
  if (!breed) res.status(404).send("Breed not found");
  else res.send(response.dataValues);
};

exports.update = async function (req, res) {
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
  try {
    const breed = await Breed.create(req.body);
    res.send(breed);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.delete = async function (req, res) {
  try {
    await Breed.destroy({
      where: {
        id: req.params.id,
      },
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
