const User = require("./user");
const Stock = require("./stock");
const Favorite = require("./favorite");

User.belongsToMany(Stock, {
  through: Favorite,
});
Stock.belongsToMany(User, {
  through: Favorite,
});
module.exports = { User, Stock };
