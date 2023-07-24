//news routes//
const router = require("express").Router();
const { Stock, StockL } = require("../models");
router.get("/", async (req, res) => {
  try {
    const stockData = await Stock.findAll();
    const stockDataL = await StockL.findAll();
    const stocks = stockData.map((stockData) => stockData.get({ plain: true }));
    const stocksL = stockDataL.map((stockDataL) =>
      stockDataL.get({ plain: true })
    );
    res.render("news", { stocks, stocksL });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
