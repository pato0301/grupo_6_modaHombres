function $(element) {
    return document.querySelector(element)
}

window.addEventListener("load", () => {

    // Imagen
    let userImg = $("#userAvatar")
    let inputImg = $("input[id='userPhoto']")
    
    // Valores
    let username = $("#username")
    let email = $("#email")
    let password = $("#password")
    let altura = $("#altura")
    let peso = $("#peso")
    let valUsername = $("#valName")
    let valEmail = $("#valEmail")
    let valPassword = $("#valPass")
    let valAltura = $("#valAltura")
    let valPeso = $("#valPeso")

    // Error Tags
    let errorAltura = $("#errorAltura") 
    let errorPeso = $("#errorPeso")
    let errorPassword = $("#errorPassword")

    // Formulario
    let formUpdate = $("#updatedUser")
    let formDelete = $("#deleteUser")

    formUpdate.addEventListener("submit",(event) => {
        event.preventDefault()
        if (isNaN(altura.value)) {
            errorAltura.innerText = "La altura debe ser un numero. Para numero decimales usar 'punto'"
        }
        else{
            errorAltura.innerText = ''
        }
        if (isNaN(peso.value)) {
            errorPeso.innerText = "El peso debe ser un numero. Para numero decimales usar 'punto'"
        }
        else{
            errorPeso.innerText = ''
        }
        if (password.value.length > 0  && password.value.length < 8) {
            errorPassword.innerText = "La contraseña debe tener mas de 8 caracteres"
        }
        else{
            errorPassword.innerText = ''
        }
        if (!isNaN(altura.value) && !isNaN(peso.value) && (password.value.length > 7 || password.value.length  == 0)) {
            errorAltura.innerText = ''
            errorPeso.innerText = ''
            errorPassword.innerText = ''
            valUsername.value = username.value
            valEmail.value = email.value
            valPassword.value = password.value
            valAltura.value = altura.value
            valPeso.value = peso.value
            formUpdate.submit()
        }
    })

    userImg.addEventListener("click",(event) => {
        // $("input[id='prodPhoto']").click();
        // let newImg = new Image(width, height);
        inputImg.click();
        inputImg.addEventListener("change",(event) => {
            var reader = new FileReader();
            reader.onload = function()
            {
            // var output = document.getElementById('output_image');
            // imgProd
            userImg.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
            // console.log(valName.value);
            // console.log(valPrice.value);
            // console.log(valDesc.value);
        })
    })
})