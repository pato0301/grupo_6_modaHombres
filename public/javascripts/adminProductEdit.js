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
    let valCat = $("#valueCategoria")
    let valueTalles = $("#valueTalles")
    let productDetail = {}
    let imgProd = $("#prodImg")
    let inputImg = $("input[id='prodPhoto']")
    let linkMoreImages = $("#moreImages")
    let categoria = $("#categoria")
    let idImagen = $("#idImagen")
    let talles = $("#talles")
    let jsonFormTalles = {}
    let listFormTalles = []

    productList.addEventListener("change",(event) => {

        let idProducto = productList.options[productList.selectedIndex].value

        fetch(`http://localhost:3000/api/product/detalle/${idProducto}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(product) {
            let tallesProd = product.talles;
            let listTalles = [];
            for (let i = 0; i < tallesProd.length; i++) {
                listTalles.push(tallesProd[i].idtalle)
            }
            for (let i = 0; i < talles.options.length; i++) {
                talles[i].selected = false
            }
            for (let i = 0; i < listTalles.length; i++) {
                $(`#talles option[value='${listTalles[i]}']`).selected = true
            }
            jsonFormTalles.original = [...listTalles]
            // console.log(talles);
            // document.querySelector("#talles option[value='26']").selected = true
            productDetail = product
            nameProd.value = product.nombre
            price.value = product.precio
            description.value = product.descripcion
            categoria.value = product.id_categoria
            idImagen.value = product.imagenes[0].idimagen
            valName.value = product.nombre
            valPrice.value = product.precio
            valDesc.value = description.value
            valCat.value = product.id_categoria
            valueTalles.value = listFormTalles
            editForm.attributes.action.value = `/admin/edit/selectProduct/${product.idproducto}?_method=put`
            deleteForm.attributes.action.value = `/admin/delete/selectProduct/${product.idproducto}?_method=delete`
            linkMoreImages.href = `http://localhost:3000/admin/moreImages/${product.idproducto}`
            imgProd.src = `/images/producto/${product.imagenes[0].imagen}`
            // console.log(valDesc.value);
            // console.log(editForm.attributes.action)
            // console.log(deleteForm.attributes.action)
        });
    })

    editForm.addEventListener("submit",(event) => {
        event.preventDefault()
        // console.log(JSON.stringify([jsonFormTalles]));
        let old = jsonFormTalles.original
        let nuevo = jsonFormTalles.nuevo
        
        if (jsonFormTalles.nuevo) {
            let eliminados = old.filter(x => nuevo.indexOf(x) === -1);
            let agregados = nuevo.filter(x => old.indexOf(x) === -1);
            jsonFormTalles.added = agregados
            jsonFormTalles.deleted = eliminados
        }
        else {
            jsonFormTalles.nuevo = []
            jsonFormTalles.added = []
            jsonFormTalles.deleted = []
        }
        
        // console.log("agregado",agregados);
        // console.log("eliminado",eliminados);
        valueTalles.value = JSON.stringify([jsonFormTalles])
        // console.log(JSON.stringify([jsonFormTalles]));
        editForm.submit()
    })

    talles.addEventListener("change",(event) => {
        // console.log("nuevo talle");
        // console.log(talles.selectedOptions[0].value);
        listFormTalles = []
        for (let i = 0; i < talles.selectedOptions.length; i++) {
            listFormTalles.push(parseInt(talles.selectedOptions[i].value))
        }
        jsonFormTalles.nuevo = [...listFormTalles]
        // console.log(jsonFormTalles);
        // valueTalles.value = jsonFormTalles
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


