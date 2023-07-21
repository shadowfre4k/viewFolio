const router = require("express").Router();
const { Favorite } = require("../../models");

//route to save ticker name based on users favorite request//
router.post("/", async (req, res) => {
    //double check
    if (!('ticker_name' in req.body)) {   
        new Error("need ticker name")
    } else if (!('user_id' in req.session)){
        new Error("user needs to log in")
    } 
    const tickerName = req.body.ticker_name
    const userID = req.session.user_id 
    try {
        const userFavorite = await Favorite.create({
            user_id:userID,
            ticker_name:tickerName
        })
        console.log(userFavorite);
        res.json(userFavorite);   
    } catch (err) {
            res.status(500).json(err);
    }
  });

  router.get('/favorite', async (req, res) => {
    const userID = req.session.user_id 
    try {
        const userFavorite = await Favorite.findAll({
            user_id:userID,
     })
     console.log(userFavorite);
     res.json(userFavorite);
    } catch (err) {
        res.status(500).json(err);
      }
  });
