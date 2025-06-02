document.addEventListener("DOMContentLoaded", () => {
  const btn_submit = document.getElementById("btn-submit");
  const error_Msg = document.getElementById("error-msg");

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
      error_Msg.textContent = "Email invalido";
      return true;
    } else {
      error_Msg.textContent = "";
      return false;
    }
  }

  function password_validation() {
    if (!password.value.trim()) {
      error_Msg.textContent = "As senhas precisam ser preenchidas";
      return true;
    } else if (password.value !== confirm_password.value) {
      error_Msg.textContent = "As senhas não coincidem";
      return true;
    } else {
      error_Msg.textContent = "";
      return false;
    }
  }

  function name_validation() {
    if (!name.value.trim()) {
      error_Msg.textContent = "O nome precisa ser preenchido";
      return true;
    } else {
      error_Msg.textContent = "";
      return false;
    }
  }

  function ddd_validation() {
    if (!ddd.value.trim()) {
      error_Msg.textContent = "Escolha um ddd";
      return true;
    } else {
      error_Msg.textContent = "";
      return false;
    }
  }

  function number_validation() {
    const num_regex = /^\d{10,11}$/;
    const is_valid = num_regex.test(number.value.trim());
    console.log(is_valid);

    if (!is_valid) {
      error_Msg.textContent = "Número invalido";
      return true;
    } else {
      error_Msg.textContent = "";
      return false;
    }
  }

  function validation() {
    if (
      !(
        email_validation() ||
        password_validation() ||
        name_validation() ||
        ddd_validation() ||
        number_validation()
      )
    ) {
      btn_submit.disabled = false;
    } else {
      btn_submit.disabled = true;
    }
  }

  email.addEventListener("blur", validation);
  password.addEventListener("blur", validation);
  confirm_password.addEventListener("blur", validation);
  name.addEventListener("blur", validation);
  ddd.addEventListener("change", validation);
  number.addEventListener("blur", validation);
  btn_submit.disabled = true;
});
