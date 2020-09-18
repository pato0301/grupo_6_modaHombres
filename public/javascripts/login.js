window.addEventListener("load",()=>{
    let loginForm = document.querySelector('#loginForm');
    let loginEmail = document.querySelector('#loginEmail');
    let loginPassword = document.querySelector('#loginPassword');
    let loginEmailError = document.querySelector('#loginEmailError');
    let loginPasswordError = document.querySelector('#loginPasswordError');
    let regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // let errors = [];
        // delete errors.loginEmail;

        if (loginEmail.value === "" || !loginEmail.value.match(regExEmail)) {
            loginEmailError.innerText = "Debe ingresar un email valido - FrontJS";
            // errors.loginEmail.innerText = (errors.loginEmail) ? errors.loginEmail : '';
            // alert("El email es obligatorio");
        } 
        else {
            loginForm.submit()
        }
    })
    
})



// Login de usuarios (Este ya lo deberían tener de sprints anteriores 😊☝ )
// ○ Email
// ■ Obligatorio
// ■ Deberá ser válido
// ■ Deberá existir en base
// ○ Contraseña
// ■ Obligatoria
// ■ Deberá coincidir con la existente en base