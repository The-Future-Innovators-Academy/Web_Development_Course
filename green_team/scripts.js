const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    name: name,
    email: email,
    message: message,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://fia-api-temp-monorepo.onrender.com/email/green-team",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

  form.reset();
});

// After writing this code above, check Console in Developer Tools in Google Chrome: (Control + Shift + J) -> Click Console Tab -> Check Output
