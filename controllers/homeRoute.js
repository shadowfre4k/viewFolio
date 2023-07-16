const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("homepage");
});
router.get("/login", async (req, res) => {
  res.render("userLogin");
});
module.exports = router;
