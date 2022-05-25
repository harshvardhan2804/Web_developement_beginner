const email = document.getElementById("mail");


email.addEventListener("input", function(event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please type an e-mail address :)");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});
