const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('consultations', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    situation: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    goal: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    deadline: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    solution: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    medicines: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    argumentation: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    id_service: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'services',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'consultations',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_consultations_services_idx",
        using: "BTREE",
        fields: [
          { name: "id_service" },
        ]
      },
    ]
  });
};
