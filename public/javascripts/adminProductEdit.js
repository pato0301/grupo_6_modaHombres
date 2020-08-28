function $(element){
    return document.querySelector(element)
}

window.addEventListener("load",()=>{

    let productList = $("#productSelected")
    let nameProd = $("#nameProduct")
    let price = $("#price")
    let description = $("#prod-desc")
    let editForm = $("#editProdForm")
    let deleteForm = $("#deleteProdForm")
    let valName = $("#valueName")
    let valPrice = $("#valuePrice")
    let valDesc = $("#valueDesc")
    let productDetail = {}
    let imgProd = $("#prodImg")
    let inputImg = $("input[id='prodPhoto']")
    let linkMoreImages = $("#moreImages")

    productList.addEventListener("change",(event) => {

        let idProducto = productList.options[productList.selectedIndex].value

        fetch(`http://localhost:3000/api/product/detalle/${idProducto}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(product) {
            productDetail = product
            nameProd.value = product.nombre
            price.value = product.precio
            description.value = product.descripcion
            valName.value = product.nombre
            valPrice.value = price.precio
            valDesc.value = description.value
            editForm.attributes.action.value = `/admin/edit/selectProduct/${product.idproducto}?_method=put`
            deleteForm.attributes.action.value = `/admin/delete/selectProduct/${product.idproducto}?_method=delete`
            linkMoreImages.href = `http://localhost:3000/admin/moreImages/${product.idproducto}`
            imgProd.src = `/images/producto/${product.imagen}?`
            // console.log(valDesc.value);
            // console.log(editForm.attributes.action)
            // console.log(deleteForm.attributes.action)
        });
    })

    nameProd.addEventListener("keyup",(event) => {
        // console.log("cambio nombre");
        valName.value = nameProd.value
        // console.log(valName.value);
    })

    price.addEventListener("keyup",(event) => {
        // console.log("cambio precio");
        valPrice.value = price.value
        // console.log(valPrice.value);
    })

    description.addEventListener("keyup",(event) => {
        // console.log("cambio descripcion");
        valDesc.value = description.value
        // console.log(valDesc.value);
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
            imgProd
            imgProd.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
            console.log(valName.value);
            console.log(valPrice.value);
            console.log(valDesc.value);
        })
        
    })
})