const router = require("express").Router();

const apiRoutes = require("./api");
const login = require("./login");
const signUp = require("./signupRoute");
const news = require("./newsRoute");

router.use("/", login);
router.use("/api", apiRoutes);
router.use("/signup", signUp);
router.use("/news", news);

module.exports = router;
