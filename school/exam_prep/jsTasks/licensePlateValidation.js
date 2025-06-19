const licensePlateSection = document.querySelector('#licensePlateInputField') // to only operate in the licenseplate section
const inputField = licensePlateSection.querySelector('#licensePlate')
const msgField = licensePlateSection.querySelector('#msg #msgField')

inputField.addEventListener('input', function () {
  let text = inputField.value

  if (text === '' || text === undefined || text === null) {
    msgField.textContent = ''
    inputField.className = ''
    return
  }

  if (!VerifyLetters(text)) {
    WrongInput('Wrong. First two characters are not letters.')
    return
  }

  if (!VerifyDigits(text)) {
    WrongInput('Wrong. Only digits are allowed after the first two letters.')
    return
  }

  if (text.length > 7) {
    WrongInput('Wrong. License plate can only be 7 characters long.')
    return
  }

  CorrectInput('Correct.')
})

function VerifyLetters(text) {
  if (text.length === 0) return

  for (let i = 0; i < 2 && i < text.length; i++) { // checking only first two characters
    if (!/^[A-Za-zÆØÅæøå]$/.test(text[i])) // regex checking alphabet + danish characters
      return false
  }
  return true
}

function VerifyDigits(text) {
  for (let i = 2; i < text.length; i++) { // checking only after the first two characters
    if (!/^\d$/.test(text[i])) // regex to check only for digits
      return false
  }

  return true
}

function WrongInput(message) {
  msgField.innerHTML = '&#x274C;' + message // innerHTML because textContent cannot use hex symbols
  msgField.style.color = 'red'
  inputField.className = 'wrong'
}

function CorrectInput(message) {
  msgField.innerHTML = '&#x2705;' + message // innerHTML because textContent cannot use hex symbols
  msgField.style.color = 'green'
  inputField.className = 'correct'
}
