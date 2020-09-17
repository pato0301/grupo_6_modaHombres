// function qs(elemento){
//     return document.querySelector(elemento);
// }

// function hasLowerCase(str) {
//     return str.toUpperCase() != str;
// }
// function hasUpperCase(str) {
//     return str.toLowerCase() != str;
// }
/*const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
};*/
window.addEventListener("load",()=>{
    let formulario = document.querySelector('#register-form');
    let errorUsername = document.querySelector('small#errorUsername');
    let errorPassword = document.querySelector('small#errorPassword');
    let errorEmail= document.querySelector('small#errorEmail');
    let password = document.querySelector('input[name="password"]'); 
    let email = document.querySelector('input[name="email"]');
    let username = document.querySelector('input[name="username"]');
    let regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    let errores = {};

        password.addEventListener('blur',(event)=>{ 
        delete errores.password;
        if(password.value == "") {
            errores.password = '*Debe ingresar una contraseña';
        } else if(password.value.length < 8){
            errores.password = '*Debe ingresar como  minimo 8 caracteres'; 
         }
         errorPassword.innerText = (errores.password) ? errores.password : '';
         console.log(errores);
    });
        //let username = document.querySelector('input[name="username"]');
        //let email = document.querySelector('input[name="email"]');
        email.addEventListener('blur',(event)=>{
        delete errores.email;
        if(!email.value.match(regExEmail)) {
            errores.email='*Debe ingresar un correo electronico';
        }
        errorEmail.innerText = (errores.email) ? errores.email : '';
        console.log(errores);
    });
        username.addEventListener('blur',(event)=>{
        delete errores.username;
        if(username.value == "") {
            errores.username = "*Debe ingresar un nombre de usuario";
        } 
        errorUsername.innerText = (errores.username) ? errores.username : '';
        console.log(errores);
    });

        formulario.addEventListener('submit',(event)=>{
            event.preventDefault();
            if(password.value == "") {
                errores.password = '*Debe ingresar una contraseña';
            } else if(password.value.length < 8){
                errores.password = '*Debe ingresar como  minimo 8 caracteres'; 
             }
            if(!email.value.match(regExEmail)) {
                errores.email='*Debe ingresar un correo electronico';
            }
            if(username.value == "") {
                errores.username = "*Debe ingresar un nombre de usuario";
            }
            if(Object.keys(errores).length >1) {
                errorPassword.innerText = (errores.password) ? errores.password : '';
                errorEmail.innerText = (errores.email) ? errores.email : '';
                errorUsername.innerText = (errores.username) ? errores.username : '';
                
                }
            console.log("holaaaa");

        });

    //     if(errores.length > 0){
    //         event.preventDefault();
    //         let listaErrores = document.querySelector('div.err ul');
    //         for (let i = 0; i < errores.length; i++) {
    //             errores.innerHTML += "<li>" + errores[i] + "</li>";
    //     }
    // }
    

});

