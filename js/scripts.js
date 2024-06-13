function passwordValidation() {
  const passwordInput = document.querySelector('#password')
  const passwordInputConf= document.querySelector('#conf-password');
  const errorMsg = document.querySelector('.form__error-msg');

  passwordInputConf.addEventListener('input', () => {
    if (passwordInput.value !== passwordInputConf.value) {
      errorMsg.classList.add('show');
    } else {
      errorMsg.classList.remove('show');
    }
  })

  passwordInput.addEventListener('input', () => {
    if (passwordInput.value !== passwordInputConf.value) {
      errorMsg.classList.add('show');
    } else {
      errorMsg.classList.remove('show');
    }
  })
}

passwordValidation();