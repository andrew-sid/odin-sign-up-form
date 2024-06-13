function passwordValidation() {
  const passwordInput = document.querySelector('#password')
  const passwordInputConf= document.querySelector('#conf-password');
  const errorMsg = document.querySelector('.form__error-msg');

  passwordInputConf.addEventListener('input', () => {
    if (passwordInput.value !== passwordInputConf.value) {
      errorMsg.classList.add('show');
      passwordInput.style.outline = '1px solid red';
      passwordInputConf.style.outline = '1px solid red';
    } else {
      errorMsg.classList.remove('show');
      passwordInput.removeAttribute('style');
      passwordInputConf.removeAttribute('style');
    }
  })

  passwordInput.addEventListener('input', () => {
    if (passwordInput.value !== passwordInputConf.value) {
      errorMsg.classList.add('show');
      passwordInput.style.outline = '1px solid red';
      passwordInputConf.style.outline = '1px solid red';
    } else {
      errorMsg.classList.remove('show');
      passwordInput.removeAttribute('style');
      passwordInputConf.removeAttribute('style');
    }
  })
}

passwordValidation();