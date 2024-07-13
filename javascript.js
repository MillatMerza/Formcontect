function validateForm() {
  var isValid = true;
  var firstname = document.getElementById("firstname").value.trim();
  var lastname = document.getElementById("lastname").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();
  var query1 = document.getElementById("c1").checked;
  var query2 = document.getElementById("c2").checked;
  var consent = document.getElementById("c3").checked;

  // Clear previous errors
  document.querySelectorAll(".error").forEach(function (error) {
    error.style.display = "none";
  });
  document.querySelectorAll(".input, .text").forEach(function (input) {
    input.classList.remove("red-border");
  });

  // Validate first name
  if (firstname === "") {
    document.getElementById("firstname-error").style.display = "block";
    document.getElementById("firstname").classList.add("red-border");
    isValid = false;
  }

  // Validate last name
  if (lastname === "") {
    document.getElementById("lastname-error").style.display = "block";
    document.getElementById("lastname").classList.add("red-border");
    isValid = false;
  }

  // Validate email
  if (email === "" || !email.includes("@")) {
    document.getElementById("email-error").style.display = "block";
    document.getElementById("email").classList.add("red-border");
    isValid = false;
  }

  // Validate query type
  if (!query1 && !query2) {
    document.getElementById("query-error").style.display = "block";
    isValid = false;
  }

  // Validate message
  if (message === "") {
    document.getElementById("message-error").style.display = "block";
    document.getElementById("message").classList.add("red-border");
    isValid = false;
  }

  // Validate consent
  if (!consent) {
    document.getElementById("consent-error").style.display = "block";
    isValid = false;
  }

  // If form is valid, show success message
  if (isValid) {
    document.getElementById("success-message").classList.add("msgshow");
    alert("Thanks for submiting");
  }

  return isValid;
}

// Add event listeners to checkboxes
document.getElementById("c1").addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("c2").checked = false;
  }
});

document.getElementById("c2").addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("c1").checked = false;
  }
});

document.getElementById("purpul").addEventListener("click", function () {
  document.body.classList.toggle("purpul-mode");
});
