//signup route//
const router = require("express").Router();


router.get("/", async (req, res) => {
  res.render("signup");
});
module.exports = router;

// should have something after the /