const testButton = document.getElementById("test-button");
console.log("this loaded");
const sayHello = () => {
  console.log("Pressered!!!");
};

testButton.addEventListener("click", function (event) {
  event.preventDefault();
  sayHello();
});
// const getStocks = async (symbol) => {

//   try {
//     let request =
//       "https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?apiKey=c5aIUpG8Te084EM9Mh4Irj1shradwA10";

//     res.status(200).json(request);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };
