const signOut = async (event) => {
  console.log("Hello");
  const response = await fetch("/api/signout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

document.querySelector("#signout").addEventListener("click", signOut);
