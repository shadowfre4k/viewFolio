const testButton = document.getElementById("test-button");
console.log("this loaded");
const sayHello = () => {
  console.log("Pressered!!!");
};

testButton.addEventListener("click", function (event) {
  event.preventDefault();
  sayHello();
});
