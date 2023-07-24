//Creates relationship between stock and user through favorite//
const User = require("./user");
const Stock = require("./stock");
const StockL = require("./stockL");
const Favorite = require("./favorite");

User.belongsToMany(Stock, {
  through: Favorite,
});
Stock.belongsToMany(User, {
  through: Favorite,
});
module.exports = { User, Stock, StockL };
