document.addEventListener("DOMContentLoaded", () => {
  const email = document.getElementById("email");
  const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const password = document.getElementById("password");
  const msg_error = document.getElementById("msg-error");
  const btn_submit = document.getElementById("btn-submit");

  function email_validation() {
    const is_valid = email_regex.test(email.value.trim());
    if (!is_valid) {
      msg_error.textContent = "Email invalido";
      return true;
    } else {
      msg_error.textContent = "";
      return false;
    }
  }

  function password_validation() {
    if (!password.value.trim()) {
      msg_error.textContent = "Por favor insira uma senha";
      return true;
    } else {
      msg_error.textContent = "";
      return false;
    }
  }

  function validation() {
    if (email_validation() || password_validation()) {
      btn_submit.disabled = true;
    } else {
      btn_submit.disabled = false;
    }
  }

  let email_is_valid = false;
  let password_is_valid = false;

  email.addEventListener("blur", () => {
    email_is_valid = true;
    email_validation();
    if (email_is_valid && password_is_valid) {
      validation();
    }
  });

  password.addEventListener("blur", () => {
    password_is_valid = true;
    password_validation();
    if (email_is_valid && password_is_valid) {
      validation();
    }
  });
});
