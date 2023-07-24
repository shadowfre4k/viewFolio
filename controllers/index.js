//routes//
const router = require("express").Router();

const apiRoutes = require("./api");
const login = require("./login");
const signUp = require("./signupRoute");
const news = require("./newsRoute");
const homepage = require("./homepage");

router.use("/", login);
router.use("/api", apiRoutes);
router.use("/signup", signUp);
router.use("/news", news);
router.use("/homepage", homepage);

module.exports = router;
