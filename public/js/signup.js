const signupFormHandler = async (event) => {
  // event.preventDefault();

  //collectValues
  console.log("this also has been clicked")
  const firstName = document.querySelector("#firstName").value.trim();
  const lastName = document.querySelector("#lastName").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (firstName && lastName && email && password) {
    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to create user");
    }
  }
};

const signUpButton = document.querySelector("#signUpButton");
signUpButton.addEventListener("click", function (event) {
  console.log("this has been clicked")
  signupFormHandler();
});
