const router = require("express").Router();

const getStocks = require("../utils/getStocks");
router.get("/", async (req, res) => {
  getStocks();
  res.render("homepage");
});
router.get("/login", async (req, res) => {
  res.render("userLogin");
});

module.exports = router;
