const Db = require("../Db");
const { DataTypes } = require("sequelize");
const sequelize = Db.getDatabase();

const Breed = sequelize.define(
  "Breed",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    link: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    picture: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    noun: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    id_category: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "categories",
        key: "id",
      },
    },
    morphotype: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    classification: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    min_size_female: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    max_size_female: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    min_size_male: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    max_size_male: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    min_weight_female: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    max_weight_female: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    min_weight_male: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    max_weight_male: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    life_expectancy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "breeds",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "id" }],
      },
      {
        name: "fk_breeds_categories_idx",
        using: "BTREE",
        fields: [{ name: "id_category" }],
      },
    ],
  }
);

module.exports = Breed;
