const router = require("express").Router();
const { User, Favorite, Stock } = require("../../models");
const getStocks = require("../../utils/getStocks");

//Get stock data
router.get("/", async (req, res) => {
  const response = await getStocks();
  res.json(response);
});

//test get user
// router.get("/users", async (req, res) => {
//   try {
//     const userData = await User.findAll({});
//     res.status("200").json(userData);
//   } catch (err) {
//     res.status("did not successfuly respond");
//   }
// });

//add user
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//******************LOGIN******************* */
router.post("/login", async (req, res) => {
  res.message("hit this point");
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

/***************************************LOGOUT************************************* */

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

/***************************************SIGNUP************************************* */
router.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
