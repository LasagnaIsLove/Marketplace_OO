document.addEventListener("DOMContentLoaded", () => {
  const form_field = document.getElementById("form-field");
  const inputs = form_field.querySelectorAll("input");

  const btn_edit = document.getElementById("btn-edit");
  const btn_cancel = document.getElementById("btn-cancel")

  function edit_toggle() {
    form_field.disabled = !form_field.disabled;
    btn_edit.disabled = !btn_edit.disabled
    fill_inputs();
  }

  function fill_inputs() {
    inputs.forEach((input) => {
      if (!input.value) {
        input.value = input.placeholder;
      } else {
        input.value = ""
      }
    });
  }

  btn_edit.addEventListener("click", edit_toggle);
  btn_cancel.addEventListener("click", edit_toggle)
});
