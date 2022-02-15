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
    const consultation = await Consultation.create({
      situation: req.body.situation,
      goal: req.body.goal,
      deadline: req.body.deadline,
      solution: req.body.solution,
      medicines: req.body.medicines,
      argumentation: req.body.argumentation,
      id_service: req.body.id_service,
    });

    res.status(201).json(consultation);
  } catch (e) {
    res.status(500).json({ error: "An error occured." });
  }
};
