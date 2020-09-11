function $(element){
    return document.querySelector(element)
}

window.addEventListener("load", () => {
    let talle = $('#talles');
    let prodForm = $('#form-detalle-prod');
    let talleValue= $('#talleValue');
    prodForm.addEventListener('submit', (event) => {
        event.preventDefault();
        talleValue.value = talle.options[talle.selectedIndex].value
        prodForm.submit();
    })
}) 