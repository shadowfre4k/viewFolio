const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class StockL extends Model {}

StockL.init(
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
      type: DataTypes.STRING,
      allowNull: true,
    },
    volume: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    sequelize,
    indexes: [{ unique: true, fields: ["ticker"] }],
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "stockL",
  }
);

module.exports = StockL;
