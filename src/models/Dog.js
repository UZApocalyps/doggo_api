const Db = require("../Db");
const { DataTypes } = require("sequelize");
const sequelize = Db.getDatabase();

const Dog = sequelize.define(
  "Dog",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    noun: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    female: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    sterilized: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    chemical: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    dead: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    id_client: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "clients",
        key: "id",
      },
    },
    breed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "breeds",
        key: "id",
      },
    },
    crossbreed: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "breeds",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "dogs",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "id" }],
      },
      {
        name: "fk_dogs_clients_idx",
        using: "BTREE",
        fields: [{ name: "id_client" }],
      },
      {
        name: "fk_dogs_breeds_idx",
        using: "BTREE",
        fields: [{ name: "breed" }],
      },
      {
        name: "fk_dogs_crossbreeds_idx",
        using: "BTREE",
        fields: [{ name: "crossbreed" }],
      },
    ],
  }
);

module.exports = Dog;
