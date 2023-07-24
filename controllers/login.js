//user log in page//
const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("userLogin");
});

module.exports = router;
