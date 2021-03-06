const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING, /// ''
      allowNull: true
    },
    minWeight: {
      type: DataTypes.INTEGER, 
      allowNull: false
    },
    maxWeight:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    minHeight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    maxHeight:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lifeExp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdInDB:{
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    timestamps: false,
  });
};
