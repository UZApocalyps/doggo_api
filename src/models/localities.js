const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('localities', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    noun: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    zip_complement: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    toponym: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    department: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    language: {
      type: DataTypes.STRING(2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'localities',
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
    ]
  });
};
