//imports//
const getStocks = require("../utils/getStocks");
const { Stock, StockL } = require("../models");

const router = require("express").Router();

//creating top gainer and top loser model// //rendering homepage//
router.get("/", async (req, res) => {
  try {
    data = await getStocks();
    Stock.bulkCreate(data.top_gainers, { ignoreDuplicates: true });
    StockL.bulkCreate(data.top_losers, { ignoreDuplicates: true });
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

