// script.js
document.addEventListener('DOMContentLoaded', function () {
  const emailButton = document.getElementById('emailSignup');

  if (emailButton) {
    emailButton.addEventListener('click', function () {
      window.location.href = "../DAFTAR_email/daftar_email.html";
    });
  }
});
