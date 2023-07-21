const router = require("express").Router();

router.get("/", async (req, res) => {

  res.render("news");
  
});
module.exports = router;


