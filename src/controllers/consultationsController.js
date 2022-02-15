const Consultation = require("../models/Consultation");

exports.getAll = async (req, res) => {
  try {
    const consultations = await Consultation.findAll();

    res.status(200).json(consultations);
  } catch (e) {
    res.status(404).json({ error: "An error occured." });
  }
};

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const consultation = await Consultation.findByPk(id);

    res.status(200).json(consultation);
  } catch (e) {
    res.status(404).json({ error: "An error occured." });
  }
};
