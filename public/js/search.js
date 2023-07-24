//function that searches stocks via the alphvantage API//

function getSearch() {
  const keyword = document.querySelector("#search-bar").value;
  let request = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${keyword}&apikey=CJD8U5VF6QPBVYDP`;
  //send request for data//
  fetch(request)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      displayStock(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
//displays stocks information to the home page//
function displayStock(data) {
  //element queries//
  const symbolEl = document.querySelector("#stock-name");
  const openEl = document.querySelector("#open-btn");
  const closeEl = document.querySelector("#close-btn");
  const highEl = document.querySelector("#high-btn");
  const lowEl = document.querySelector("#low-btn");
  //object properties needed//
  const symbol = data["Meta Data"]["2. Symbol"];
  const open = "Open: " + data["Time Series (Daily)"]["2023-02-28"]["1. open"];
  const close =
    "Close: " + data["Time Series (Daily)"]["2023-02-28"]["4. close"];
  const high = "High: " + data["Time Series (Daily)"]["2023-02-28"]["2. high"];
  const low = "Low: " + data["Time Series (Daily)"]["2023-02-28"]["3. low"];
  //replacing text in HTML//
  symbolEl.innerHTML = symbol;
  openEl.innerHTML = open;
  closeEl.innerHTML = close;
  highEl.innerHTML = high;
  lowEl.innerHTML = low;
}
//Search button//
document
  .querySelector("#search-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("hello");
    getSearch(event);
  });
