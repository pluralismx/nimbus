// EVENT LISTENERS
document.querySelector('#anchor-forgot-password').addEventListener('click', formToogle);
document.querySelector('#anchor-back').addEventListener('click', formToogle);
document.querySelector('#verification-code-request').addEventListener('click', codeRequest);

// FUNCTIONS
function formToogle() {

   let login = document.querySelector('.login-container');
   let reset = document.querySelector('.reset-password-container')

   if(login.classList.contains('active')){
        login.classList.remove('active');
        login.classList.add('hidden');
        reset.classList.add('active');
        reset.classList.remove('hidden');
   }else{
        login.classList.remove('hidden');
        login.classList.add('active');
        reset.classList.remove('active');
        reset.classList.add('hidden');
   }
}

function codeRequest(){
     let email = document.querySelector('#email').value;
     let hr = new XMLHttpRequest();
     let formData = new FormData();
     let url = "user/resetPassword";

     formData.append('email', email);

     hr.open("POST", url, true);
     hr.onreadystatechange = function() {
          if (hr.readyState === 4 && hr.status === 200) {
               if(hr.responseText == 'true'){
                    document.querySelector('.login-container').classList.add('hidden');
                    document.querySelector('.reset-password-container').classList.add('hidden');
                    document.querySelector('.verification-container').classList.remove('hidden');
                    document.querySelector('.verification-container').classList.add('active');
               }else {
                    alert('Correo invalido');
               }
          }
     }
     hr.send(formData);
}