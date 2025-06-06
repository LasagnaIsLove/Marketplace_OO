document.addEventListener("DOMContentLoaded", () => {
  const form_field = document.getElementById("form-field");
  const inputs = form_field.querySelectorAll("input");

  const btn_edit = document.getElementById("btn-edit");
  const btn_cancel = document.getElementById("btn-cancel");

  function edit_toggle() {
    form_field.disabled = !form_field.disabled;
    btn_edit.disabled = !btn_edit.disabled;
    fill_inputs();
  }

  function fill_inputs() {
    inputs.forEach((input) => {
      if (!input.value) {
        input.value = input.placeholder;
      } else {
        input.value = "";
      }
    });
  }

  btn_edit.addEventListener("click", edit_toggle);
  btn_cancel.addEventListener("click", edit_toggle);

  const btnInfo = document.getElementById("btn-info");
  const btnHistory = document.getElementById("btn-history");
  const divInfo = document.getElementById("profile-info");
  const divHistory = document.getElementById("profile-history");

  divInfo.style.display = "block";
  divHistory.style.display = "none";

  btnHistory.addEventListener("click", () => {
    divInfo.style.display = "none";
    divHistory.style.display = "block";
  });

  btnInfo.addEventListener("click", () => {
    divHistory.style.display = "none";
    divInfo.style.display = "block";
  });
});
