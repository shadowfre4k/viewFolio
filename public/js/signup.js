const signupFormHandler = async (event) => {
  event.preventDefault();

  //collectValues

  const firstName = document.querySelector("#firstName").value.trim();
  const lastName = document.querySelector("#lastName").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (firstName && lastName && email && password) {
    const response = await fetch("/signup", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/userLogin");
    } else {
      alert("Failed to create user");
    }
  }
};

const signUpButton = documement.querySelector("#signUpButton");
signUpButton.addEventListener("click", function (event) {
  signupFormHandler();
});