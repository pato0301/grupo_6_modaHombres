function $(element){
    return document.querySelector(element)
}

window.addEventListener("load",()=>{

    // let productList = $("#productSelected")
    let nameProd = $("#nameProduct")
    let price = $("#price")
    let description = $("#prod-desc")
    let newForm = $("#newProdForm")
    let errorName = $("#errorName")
    let errorPrice = $("#errorPrice")
    let errorText = $("#errorText")
    let exito = $("#exito")
    // let regex=/^[0-9]+$/;
    // let deleteForm = $("#deleteProdForm")
    // let valName = $("#valueName")
    // let valPrice = $("#valuePrice")
    // let valDesc = $("#valueDesc")
    // let productDetail = {}
    let imgProd = $("#prodImg")
    let inputImg = $("input[id='prodPhoto']")

    newForm.addEventListener("submit",(event) => {
        event.preventDefault()
        console.log("apretaste submit");
        if(isNaN(price.value) || price.value < 0 || price.value == "")
        {
            // alert("Must input numbers");
            // return false;
            errorPrice.innerText = "Price must be a number"
            console.log("no es numero");
        }
        if(nameProd.value == "")
        {
            // alert("Must input numbers");
            // return false;
            errorName.innerText = "Product must have a Name"
            console.log("nombre vacio");
        }
        if(description.value == ""){
            errorText.innerText = "Description can not be empty"
            console.log("description empty");
        }
        if(description.value.length < 10){
            errorName.innerText = "Description must have at least 10 letters"
            console.log("description less than 10");
        }
        if(!isNaN(price.value) && price.value > 0 && nameProd.value != "" && description.value.length > 9){
            console.log("voy a cargar producto");
            // let newProduct = {
            //     name: nameProd.value,
            //     description: description.value,
            //     price: price.value,
            //     // image: "default_avatar.png"
            //     image: inputImg.files[0] == undefined || inputImg.files.length == 0? "default_avatar.png": inputImg.files[0].name,
            //     productImage: inputImg,
            // }
            console.log(newForm);
            fetch('http://localhost:3000/api/product/newProduct',{
                method: 'POST',
                // headers:{
                //     'Content-Type': 'multipart/form-data'
                // },
                body: new FormData(newForm)
            })
            .then(response => {
                // console.log(response.json());
                return response.json()
                // alert("El producto se creo con exito")
            })
            .catch(error => console.error('Error:', error))
            .then((respuesta) => {
                exito.innerHTML = "El producto se cargo exitosamente"
                console.log('Success: ', respuesta)
                alert("El producto se cargo exitosamente")
            })
        }
        // newForm.submit()
    })

    imgProd.addEventListener("click",(event) => {
        // $("input[id='prodPhoto']").click();
        // let newImg = new Image(width, height);
        inputImg.click();
        inputImg.addEventListener("change",(event) => {
            var reader = new FileReader();
            reader.onload = function()
            {
            // var output = document.getElementById('output_image');
            // imgProd
            imgProd.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
            // console.log(valName.value);
            // console.log(valPrice.value);
            // console.log(valDesc.value);
        })
        
    })
})