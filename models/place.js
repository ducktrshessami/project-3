'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Place.hasMany(models.Review);
    }
  };
  Place.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    place_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    formatted_address: DataTypes.STRING,
    name: DataTypes.STRING,
    types: DataTypes.ARRAY(DataTypes.STRING),
    url: DataTypes.STRING,
    photo: DataTypes.STRING,
    latitude: DataTypes.DECIMAL,
    longitude: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Place',
  });
  return Place;
};