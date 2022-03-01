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
