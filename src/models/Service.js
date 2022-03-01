const Db = require("../Db");
const { DataTypes } = require("sequelize");
const sequelize = Db.getDatabase();

const Service = sequelize.define(
  "Service",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    moment: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    duration: {
      type: DataTypes.DECIMAL(2, 1),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    street: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    id_locality: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "localities",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "services",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "id" }],
      },
      {
        name: "fk_services_localities_idx",
        using: "BTREE",
        fields: [{ name: "id_locality" }],
      },
    ],
  }
);

module.exports = Service;
