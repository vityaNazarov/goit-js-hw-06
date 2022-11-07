const refs = {
  form: document.querySelector(".login-form"),
  button: document.querySelector('button[type="submit"]'),
  email: document.querySelector('input[type="email"]'),
  password: document.querySelector('input[type="password"]'),
};

refs.form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { login, password },
  } = event.currentTarget;

  if (refs.email.value === "" || refs.password.value === "") {
    alert("Заполните пожалуйста все поля!");
  }
  console.log(`Email: ${refs.email.value}, Password: ${refs.password.value}`);
  event.currentTarget.reset();
}
