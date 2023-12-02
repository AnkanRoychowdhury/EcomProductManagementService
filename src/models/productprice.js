'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductPrice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductPrice.init({
    currency: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['USD','INR','CA'],
      defaultValue: 'USD'
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    retail: {
      type: DataTypes.INTEGER,
    },
    subscriptionPrice: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'ProductPrice',
  });
  return ProductPrice;
};