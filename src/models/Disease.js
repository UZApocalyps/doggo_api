const Db = require("../Db");
const { DataTypes } = require("sequelize");
const sequelize = Db.getDatabase();

const Disease = sequelize.define(
  "Disease",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    noun: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(2500),
      allowNull: false,
    },
    symptoms: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    preventive: {
      type: DataTypes.STRING(2000),
      allowNull: false,
    },
    curative: {
      type: DataTypes.STRING(2000),
      allowNull: false,
    },
    vaccinable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    zoonosis: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "diseases",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "id" }],
      },
    ],
  }
);

module.exports = Disease;
