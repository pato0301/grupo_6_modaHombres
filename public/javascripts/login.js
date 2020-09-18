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
        } 
        if (loginPassword.value === "" || loginPassword.value.length < 8) {
            loginPasswordError.innerText = "Debe ingresar una contraseña de al menos 8 caracteres - FrontJS";
        }
        if (loginEmail.value.match(regExEmail) && loginPassword.value.length > 7) {
            loginForm.submit()
        }
    })
    
})



// Login de usuarios (Este ya lo deberían tener de sprints anteriores 😊☝ )
// ○ Email
// ■ Obligatorio CUMPLIDO
// ■ Deberá ser válido CUMPLIDO
// ■ Deberá existir en base PENDIENTE
// ○ Contraseña
// ■ Obligatoria
// ■ Deberá coincidir con la existente en base