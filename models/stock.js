const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Stock extends Model {}

Stock.init(
  {
    ticker: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 5),
      allowNull: false,
    },
    change_amount: {
      type: DataTypes.DECIMAL(10, 5),
      allowNull: false,
    },
    change_percentage: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    volume: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "stock",
  }
);

module.exports = Stock;
