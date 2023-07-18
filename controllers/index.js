const router = require("express").Router();

const apiRoutes = require("./api");
const home = require("./homeRoute");
const signUp = require('./signupRoute');

router.use("/", home);
router.use("/api", apiRoutes);
router.use('/', signUp);
module.exports = router;
