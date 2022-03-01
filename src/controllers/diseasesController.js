const Disease = require("../models/Disease");

/**
 * Get all the diseases
 * @param {*} req
 * @param {*} res
 */
exports.getAll = async (req, res) => {
  try {
    const diseases = await Disease.findAll();

    res.status(200).json(diseases);
  } catch (e) {
    res.status(404).json({ error: "An error occured." });
  }
};

/**
 * Get a disease by id
 * @param {*} req
 * @param {*} res
 */
exports.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const disease = await Disease.findByPk(id);

    if (!disease) throw new Error("An error occured.");

    res.status(200).json(disease);
  } catch (e) {
    res.status(404).json({ error: "An error occured." });
  }
};

/**
 * Create a new disease
 * @param {*} req
 * @param {*} res
 */
exports.create = async (req, res) => {
  try {
    const disease = await Disease.create(req.body);

    res.status(201).json(disease);
  } catch (e) {
    res.status(500).json({ error: "An error occured." });
  }
};

/**
 * Update a disease
 * @param {*} req
 * @param {*} res
 */
exports.update = async (req, res) => {
  const id = req.params.id;

  try {
    const disease = await Disease.update(
      {
        noun: req.body.noun,
        description: req.body.description,
        symptoms: req.body.symptoms,
        preventive: req.body.preventive,
        curative: req.body.curative,
        vaccinable: req.body.vaccinable,
        zoonosis: req.body.zoonosis,
      },
      {
        where: { id: id },
      }
    );

    res.status(200).json(disease);
  } catch (e) {
    res.status(404).json({ error: "An error occured." });
  }
};

/**
 * Delete a disease
 * @param {*} req
 * @param {*} res
 */
exports.delete = async (req, res) => {
  const id = req.params.id;

  try {
    const disease = await Disease.destroy({ where: { id: id } });

    res.status(204).json(disease);
  } catch (e) {
    res.status(404).json({ error: "An error occured." });
  }
};
