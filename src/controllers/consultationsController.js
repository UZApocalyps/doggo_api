const Consultation = require("../models/Consultation");

/**
 * Get all the consultations
 * @param {*} req
 * @param {*} res
 */
exports.getAll = async (req, res) => {
  try {
    const consultations = await Consultation.findAll();

    res.status(200).json(consultations);
  } catch (e) {
    res.status(404).json({ error: "An error occured." });
  }
};

/**
 * Get a consultation by id
 * @param {*} req
 * @param {*} res
 */
exports.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const consultation = await Consultation.findByPk(id);

    if (!consultation) throw new Error("An error occured.");

    res.status(200).json(consultation);
  } catch (e) {
    res.status(404).json({ error: "An error occured." });
  }
};

/**
 * Create a new consultation
 * @param {*} req
 * @param {*} res
 */
exports.create = async (req, res) => {
  try {
    const consultation = await Consultation.create(req.body);

    res.status(201).json(consultation);
  } catch (e) {
    res.status(500).json({ error: "An error occured." });
  }
};

/**
 * Update a consultation
 * @param {*} req
 * @param {*} res
 */
exports.update = async (req, res) => {
  const id = req.params.id;

  try {
    const consultation = await Consultation.update(req.body, {
      where: { id: id },
    });

    res.status(200).json(consultation);
  } catch (e) {
    res.status(404).json({ error: "An error occured." });
  }
};

/**
 * Delete a consultation
 * @param {*} req
 * @param {*} res
 */
exports.delete = async (req, res) => {
  const id = req.params.id;

  try {
    const consultation = await Consultation.destroy({ where: { id: id } });

    res.status(204).json(consultation);
  } catch (e) {
    res.status(404).json({ error: "An error occured." });
  }
};
