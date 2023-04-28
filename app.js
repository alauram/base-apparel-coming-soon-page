const submit = document.querySelector(".submit")
const error = document.querySelector(".error-msg")
const form = document.querySelector("form")
const input = document.querySelector("input")
const label = document.querySelector(".error-icon")

form.addEventListener("submit", validate)
submit.addEventListener("click", validate)

function validate(e) {
  e.preventDefault()

  const inputValue = input.value.trim()

  if (!isEmail(inputValue)) {
    error.style.display = "block"
    label.style.display = "block"
    input.style.borderColor = "red"
  } else {
    error.style.display = "none"
    label.style.display = "none"
  }
}

function isEmail(input) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
}