const axios = require("axios");
require("dotenv").config();

// get stock data
const getStocks = async () => {
  let request = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&limit=5&apikey=${process.env.ALPHAVANTAGE_KEY}`;
  let { data } = await axios.get(request);
  return data;
};

//get favorite stocks
const getFavorites = async (symbol) => {
  let request = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${process.env.ALPHAVANTAGE_KEY}`;

  let { data } = await axios.get(request);

  const favorite = data;

  const topPrice = data.top_gainers[0].price;
  const bottomPrice = data.top_losers[1].price;
  const topAmount = data.top_gainers[0].change_amount;
  const bottomAmount = data.top_losers[1].change_amount;
  const topPercentage = data.top_gainers[0].change_percentage;
  const bottomPercentage = data.top_losers[1].change_percentage;
  const topVolumn = data.top_gainers[0].volumn;
  const bottomVolumn = data.top_losers[1].volumn;
  return data;
};

module.exports = { getStocks };
