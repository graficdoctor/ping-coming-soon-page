const form = document.getElementById('form')
const email = document.getElementById('email')
const message = document.querySelector('.message')
const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputtedValue = email.value.trim()
  checkInputs(inputtedValue)
})

function checkInputs(inputtedValue) {
  if (inputtedValue === '') {
    message.classList.remove('valid')
    message.classList.add('invalid')
    message.innerText = 'You forgot to enter your address'
    message.style.display = 'inline-block'
    form.reset()
    message.reset()
  } else if (inputtedValue.match(emailPattern)) {
    message.classList.add('valid')
    message.classList.remove('invalid')
    message.innerText = 'Your email address is valid'
    message.style.display = 'inline-block'
    form.reset()
  } else {
    message.classList.remove('valid')
    message.classList.add('invalid')
    message.innerText = 'Oops, something went wrong'
    message.style.display = 'inline-block'
    form.reset()
  }
}
