const loginFormHandler = async (event) => {
    event.preventDefault();
  
    //collectValues
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();
  
    if (email && password) {
      const response = await fetch("/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        document.location.replace("/homepage");
      } else {
        alert("Failed to log in");
      }
    }
  };
  
  const loginButton = documement.querySelector("#loginButton");
  loginButton.addEventListener("click", function (event) {
    loginFormHandler();
  });