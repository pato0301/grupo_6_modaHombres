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
    // let regex=/^[0-9]+$/;
    // let deleteForm = $("#deleteProdForm")
    // let valName = $("#valueName")
    // let valPrice = $("#valuePrice")
    // let valDesc = $("#valueDesc")
    // let productDetail = {}
    let imgProd = $("#prodImg")
    let inputImg = $("input[id='prodPhoto']")

    // productList.addEventListener("change",(event) => {

    //     let idProducto = productList.options[productList.selectedIndex].value

    //     fetch(`http://localhost:3000/api/product/detalle/${idProducto}`)
    //     .then(function(response) {
    //         return response.json();
    //     })
    //     .then(function(product) {
    //         productDetail = product
    //         nameProd.value = product.name
    //         price.value = product.price
    //         description.value = product.description
    //         valName.value = product.name
    //         valPrice.value = price.value
    //         valDesc.value = description.value
    //         editForm.attributes.action.value = `/admin/edit/selectProduct/${product.id}?_method=put`
    //         deleteForm.attributes.action.value = `/admin/delete/selectProduct/${product.id}?_method=delete`
    //         imgProd.src = `/images/producto/${product.image}?`
    //         // console.log(valDesc.value);
    //         // console.log(editForm.attributes.action)
    //         // console.log(deleteForm.attributes.action)
    //     });
    // })

    newForm.addEventListener("submit",(event) => {
        event.preventDefault()
        console.log("apretaste submit");
        if(isNaN(price.value) || price.value < 0)
        {
            // alert("Must input numbers");
            // return false;
            errorPrice.value = "Price must be a number"
            console.log("no es numero");
        }
        if(nameProd.value == "")
        {
            // alert("Must input numbers");
            // return false;
            errorName.value = "Product must have a Name"
            console.log("nombre vacio");
        }
        if(description.value == ""){
            errorText.value = "Description can not be empty"
            console.log("description empty");
        }
        if(description.value.length < 10){
            errorName.value = "Description must have at least 10 letters"
            console.log("description less than 10");
        }
        if(!isNaN(price.value) && price.value > 0 && nameProd.value != "" && description.value.length > 9){
            console.log("voy a cargar producto");
            let newProduct = {
                name: nameProd.value,
                description: description.value,
                price: price.value,
                image:"default_avatar.png"
                // image: req.files == undefined || req.files.length == 0? "default_avatar.png": req.files[0].filename,
            }
            fetch(`http://localhost:3000/api/product/newProduct`,{
                method: 'POST',
                body: JSON.stringify(newProduct),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(respuesta => console.log('Success: ', respuesta))
        }
        // newForm.submit()
    })

    // nameProd.addEventListener("keyup",(event) => {
    //     // console.log("cambio nombre");
    //     // valName.value = nameProd.value
    //     // console.log(valName.value);
    //     console.log(nameProd.value);
    // })

    // price.addEventListener("keyup",(event) => {
    //     // console.log("cambio precio");
    //     // valPrice.value = price.value
    //     // console.log(valPrice.value);
    //     // if (price.value.match(regex))
    //     if(isNaN(price.value) || price.value < 0)
    //     {
    //         // alert("Must input numbers");
    //         // return false;
    //         console.log("no es numero");
    //     }
    //     console.log(price.value);
    // })

    // description.addEventListener("keyup",(event) => {
    //     // console.log("cambio descripcion");
    //     // valDesc.value = description.value
    //     // console.log(valDesc.value);
    //     console.log(description.value);
    // })

    imgProd.addEventListener("click",(event) => {
        // $("input[id='prodPhoto']").click();
        // let newImg = new Image(width, height);
        inputImg.click();
        inputImg.addEventListener("change",(event) => {
            var reader = new FileReader();
            reader.onload = function()
            {
            // var output = document.getElementById('output_image');
            imgProd
            imgProd.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
            // console.log(valName.value);
            // console.log(valPrice.value);
            // console.log(valDesc.value);
        })
        
    })
})