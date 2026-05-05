const button = document.querySelector("#theme-toggle");

button.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

const form = document.querySelector("#contact-form");

const formMessage = document.querySelector("#form-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  formMessage.textContent =
    "Thanks for reaching out! I'll get back to you soon.";
  form.reset();
});
