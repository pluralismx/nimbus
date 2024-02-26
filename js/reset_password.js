document.querySelector('#confirmed_password').addEventListener('input', verifyPassword);

function verifyPassword() {
  let unconfirmed_password = document.querySelector('#unconfirmed_password').value;
  let confirmed_password = document.querySelector('#confirmed_password').value;
  let btn_update = document.querySelector('#btn-update-password');

  if (unconfirmed_password === confirmed_password) {
    btn_update.removeAttribute('disabled');
    document.querySelector('#span-match').style.display = 'none';
  }
}
