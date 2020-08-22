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

    productList.addEventListener("change",(event) => {

        let idProducto = productList.options[productList.selectedIndex].value

        fetch(`http://localhost:3000/api/product/detalle/${idProducto}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(product) {
            productDetail = product
            nameProd.value = product.name
            price.value = product.price
            description.value = product.description
            valName.value = product.name
            valPrice.value = price.value
            valDesc.value = description.value
            editForm.attributes.action.value = `/admin/edit/selectProduct/${product.id}?_method=put`
            deleteForm.attributes.action.value = `/admin/delete/selectProduct/${product.id}?_method=delete`
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
})