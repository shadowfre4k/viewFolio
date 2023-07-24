const axios = require("axios");

require("dotenv").config();

// get stock data
const getStocks = async () => {
  let request = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${process.env.ALPHAVANTAGE_KEY}`;
  let { data } = await axios.get(request);
  return data;
};

module.exports = getStocks;
