import {getNode, matchPw, checkEmail, checkLength, checkInput, makeCertificateNum, makeUniqueId, getNodes, checkAll, compareCheck, user} from '../lib/index.js';

const confirmPassword = getNode('#password-confirm');
const email = getNode('#email');
const password = getNode('.register #password');
const phone = getNode('#phone');
const births = getNodes('input[class *= "register-birth"]');
const phoneButton = getNode('#phone-certificate');
const registerSubmit = getNode('.register__submit-button');
const checkAllButton = getNode('#terms-check-all');
const checkboxes = getNodes('input[name="terms"]');

async function registerUser() {
  let userData = {
    email: email.value,
    password: password.value,
  };
  try {
    // let response = await user.get('http://localhost:3000/users');
    user.post('http://localhost:3000/users', userData);
    // console.log(response.data);
  } catch (err) {
    console.log(err);
  }
}

confirmPassword.addEventListener('input', matchPw);
email.addEventListener('input', checkEmail);
password.addEventListener('input', checkLength);
phone.addEventListener('input', checkInput);
births.forEach(birth => {
  birth.addEventListener('input', checkInput);
});
phoneButton.addEventListener('click', makeCertificateNum);
registerSubmit.addEventListener('click', registerUser);
checkAllButton.addEventListener('click', checkAll);
checkboxes.forEach(check => {
  check.addEventListener('click', compareCheck);
});
