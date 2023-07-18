const axios = require("axios");
const getStocks = async () => {
  let request =
    "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=CJD8U5VF6QPBVYDP";
  console.log(request);
  let { data } = await axios.get(request);

  console.log(data);
  const topGainers = data.top_gainers[0].change_percentage;
  const topLosers = data.top_losers[0].change_percentage;
  console.log(topGainers);
  console.log(topLosers);
};

module.exports = getStocks;
