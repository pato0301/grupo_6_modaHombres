function $(element){
    return document.querySelector(element)
}

window.addEventListener("load",()=>{
    let form = $("#formCarrito")
    let calle = $("#calle")
    let altura = $("#altura")
    let codigoPostal = $("#postal")
    let localidad = $("#localidad")
    let envio = $("#envio")

    form.addEventListener("submit",(event) => {
        event.preventDefault()
        Swal.fire({
            title: 'Seleccione Modalidad de Retiro',
            input: 'radio',
            inputOptions: {"sucursal":"En sucursal","domicilio":"A domicilio"}
        })
        .then((inputValue) => {
            // console.log(inputValue.value);
            if (inputValue.value == "sucursal") {
                Swal.fire({
                    icon: 'success',
                    title: 'Finalizaste tu Compra',
                    text: 'A partir de mañana podes retirar tu producto'
                })
                envio.value = inputValue.value;
                setTimeout(function() {
                    return form.submit()
                }, 2500);
            }
            else{
                swal.fire({
                    title: 'Ingrese su direccion',
                    html:
                        '<input type="text" id="swal-input1" class="swal2-input" placeholder="Calle">' +
                        '<input type="text" id="swal-input2" class="swal2-input" placeholder="Altura">' +
                        '<input type="text" id="swal-input3" class="swal2-input" placeholder="Codigo Postal">'+
                        '<input type="text" id="swal-input4" class="swal2-input" placeholder="Localidad">',
                    focusConfirm: false,
                    preConfirm: () => {
                        return {
                            calle:document.getElementById('swal-input1').value,
                            altura:document.getElementById('swal-input2').value,
                            postal:document.getElementById('swal-input3').value,
                            localidad:document.getElementById('swal-input4').value
                        }
                    },
                    showCancelButton: true
                })
                .then((formValues) => {
                    // swal(JSON.stringify(formValues))
                    // for (let i = 0; i < formValues.length; i++) {
                    //     if (formValues != "") {
                    //         calle.value = formValues[i]
                    //     }
                    // }
                    let inputs = formValues.value
                    if (inputs.calle != "" && inputs.altura != "" && inputs.postal != "" && inputs.localidad != "") {
                        calle.value = inputs.calle;
                        altura.value = inputs.altura;
                        codigoPostal.value = inputs.postal;
                        localidad.value = inputs.localidad;
                        envio.value = inputValue.value;
                        Swal.fire({
                            icon: 'success',
                            title: 'Finalizaste tu Compra',
                            text: 'En los proximos dias llegara a tu domicilio'
                        })
                        setTimeout(function() {
                            return form.submit()
                        }, 2500);
                    }
                    else{
                        Swal.fire({
                            icon: 'error',
                            title: 'Faltan datos',
                            text: 'Por favor complete todos los datos para el envio a domicilio'
                        })
                    }
                    // console.log(inputs);
                })
            }
        })
        // swal({
        //     title: "Good job!",
        //     text: "You clicked the button!",
        //     icon: "success",
        // });
    })
})