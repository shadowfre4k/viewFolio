const router = require("express").Router();
const userRoute = require("./userRoute");

router.use("/", userRoute);

module.exports = router;
