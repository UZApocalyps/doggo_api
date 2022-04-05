const Category = require("../models/Category");

/**
 * Get all the categories
 * @param {*} req
 * @param {*} res
 */
exports.categories = async (req, res) => {
  // #swagger.tags = ['Category']
  /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Categories" },
  } */
  try {
    const categories = await Category.findAll();

    res.status(200).json(categories);
  } catch (e) {
    res.status(404).json({ error: "An error occured." });
  }
};

/**
 * Get a category by id
 * @param {*} req
 * @param {*} res
 */
exports.details = async (req, res) => {
  // #swagger.tags = ['Category']
  /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Category" },
  } */

  try {
    const id = req.params.id;
    const category = await Category.findByPk(id);

    if (!category) throw new Error("An error occured.");

    res.status(200).json(category);
  } catch (e) {
    res.status(404).json({ error: "An error occured." });
  }
};

/**
 * Create a new category
 * @param {*} req
 * @param {*} res
 */
exports.create = async (req, res) => {
  // #swagger.tags = ['Category']
  /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Categories" },
  } */

  try {
    const category = await Category.create(req.body);

    res.status(201).json(category);
  } catch (e) {
    res.status(500).json({ error: "An error occured." });
  }
};

/**
 * Update a category
 * @param {*} req
 * @param {*} res
 */
exports.update = async (req, res) => {
  // #swagger.tags = ['Category']
  /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Category" },
  } */
  const id = req.params.id;

  try {
    const category = await Category.update(req.body, { where: { id: id } });

    res.status(200).json(category);
  } catch (e) {
    res.status(404).json({ error: "An error occured." });
  }
};

/**
 * Delete a category
 * @param {*} req
 * @param {*} res
 */
exports.delete = async (req, res) => {
  // #swagger.tags = ['Category']

  const id = req.params.id;

  try {
    const category = await Category.destroy({ where: { id: id } });

    res.status(204).json(category);
  } catch (e) {
    res.status(404).json({ error: "An error occured." });
  }
};
