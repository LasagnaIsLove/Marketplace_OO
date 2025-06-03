document.addEventListener("DOMContentLoaded", () => {
  const btn_submit = document.getElementById("btn-submit");

  const error_email = document.getElementById("error-email");
  const error_password = document.getElementById("error-password");
  const error_confirm_password = document.getElementById(
    "error-confirm-password"
  );

  const error_name = document.getElementById("error-name");
  const error_phone = document.getElementById("error-phone");

  const email = document.getElementById("email");

  const password = document.getElementById("password");
  const confirm_password = document.getElementById("confirm-password");

  const name = document.getElementById("name");
  const number = document.getElementById("phone");
  const ddd = document.getElementById("ddd");

  function email_validation() {
    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const is_valid = email_regex.test(email.value.trim());

    if (!is_valid) {
      error_email.textContent = "Email invalido";
      return true;
    } else {
      error_email.textContent = "";
      return false;
    }
  }

  function password_validation() {
    if (!password.value.trim()) {
      error_password.textContent = "As senhas precisam ser preenchidas";
      return true;
    } else if (password.value !== confirm_password.value) {
      error_password.textContent = "As senhas não coincidem";
      error_confirm_password.textContent = "As senhas não coincidem";
      return true;
    } else {
      error_password.textContent = "";
      error_confirm_password.textContent = "";
      return false;
    }
  }

  function password_confirm_validation() {
    if (!confirm_password.value.trim()) {
      error_confirm_password.textContent = "As senhas precisam ser preenchidas";
      return true;
    } else if (password.value !== confirm_password.value) {
      error_password.textContent = "As senhas não coincidem";
      error_confirm_password.textContent = "As senhas não coincidem";
      return true;
    } else {
      error_password.textContent = "";
      error_confirm_password.textContent = "";
      return false;
    }
  }

  function name_validation() {
    if (!name.value.trim()) {
      error_name.textContent = "O nome precisa ser preenchido";
      return true;
    } else {
      error_name.textContent = "";
      return false;
    }
  }

  function ddd_validation() {
    if (!ddd.value.trim()) {
      error_phone.textContent = "Escolha um ddd";
      return true;
    } else {
      error_phone.textContent = "";
      return false;
    }
  }

  function number_validation() {
    const num_regex = /^\d{10,11}$/;
    const is_valid = num_regex.test(number.value.trim());

    if (!is_valid) {
      error_phone.textContent = "Número invalido";
      return true;
    } else {
      error_phone.textContent = "";
      return false;
    }
  }

  function validation() {
    if (
      !(
        email_validation() ||
        password_validation() ||
        password_confirm_validation() ||
        name_validation() ||
        ddd_validation() ||
        number_validation()
      )
    ) {
      btn_submit.disabled = false;
      console.log("habilitado");
    } else {
      btn_submit.disabled = true;
      console.log("desabilitado");
    }
  }

  let email_is_valid = false;
  let password_is_valid = false;
  let confirm_password_is_valid = false;
  let name_is_valid = false;
  let ddd_is_valid = false;
  let number_is_valid = false;

  email.addEventListener("blur", () => {
    email_validation();
    email_is_valid = true;
    if (
      email_is_valid &&
      password_is_valid &&
      confirm_password_is_valid &&
      name_is_valid &&
      ddd_is_valid &&
      number_is_valid
    ) {
      validation();
    }
  });
  password.addEventListener("blur", () => {
    password_validation();
    password_is_valid = true;
    if (
      email_is_valid &&
      password_is_valid &&
      confirm_password_is_valid &&
      name_is_valid &&
      ddd_is_valid &&
      number_is_valid
    ) {
      validation();
    }
  });
  confirm_password.addEventListener("blur", () => {
    password_confirm_validation();
    confirm_password_is_valid = true;
    if (
      email_is_valid &&
      password_is_valid &&
      confirm_password_is_valid &&
      name_is_valid &&
      ddd_is_valid &&
      number_is_valid
    ) {
      validation();
    }
  });
  name.addEventListener("blur", () => {
    name_validation();
    name_is_valid = true;
    if (
      email_is_valid &&
      password_is_valid &&
      confirm_password_is_valid &&
      name_is_valid &&
      ddd_is_valid &&
      number_is_valid
    ) {
      validation();
    }
  });
  ddd.addEventListener("change", () => {
    ddd_validation();
    ddd_is_valid = true;
    if (
      email_is_valid &&
      password_is_valid &&
      confirm_password_is_valid &&
      name_is_valid &&
      ddd_is_valid &&
      number_is_valid
    ) {
      validation();
    }
  });
  number.addEventListener("blur", () => {
    number_validation();
    number_is_valid = true;
    if (
      email_is_valid &&
      password_is_valid &&
      confirm_password_is_valid &&
      name_is_valid &&
      ddd_is_valid &&
      number_is_valid
    ) {
      validation();
    }
  });
  btn_submit.disabled = true;
});
