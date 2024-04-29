const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);
});

// After writing this code above, check Console in Developer Tools in Google Chrome: (Control + Shift + J) -> Click Console Tab -> Check Output
