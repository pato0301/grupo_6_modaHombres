function $(element){
    return document.querySelector(element)
}

window.addEventListener("load",()=>{

    // let productList = $("#productSelected")
    // let nameProd = $("#nameProduct")
    // let price = $("#price")
    // let description = $("#prod-desc")
    // let editForm = $("#editProdForm")
    // let deleteForm = $("#deleteProdForm")
    // let valName = $("#valueName")
    // let valPrice = $("#valuePrice")
    // let valDesc = $("#valueDesc")
    // let productDetail = {}
    let output = $("#result");
    let imgProd1 = $("#prodImg1")
    let imgProd2 = $("#prodImg2")
    let imgProd3 = $("#prodImg3")
    let inputImg = $("input[id='prodPhoto']")


    imgProd1.addEventListener("click",(event) => {
        // $("input[id='prodPhoto']").click();
        // let newImg = new Image(width, height);
        funCagaImagens()
        
    })
    imgProd2.addEventListener("click",(event) => {
        // $("input[id='prodPhoto']").click();
        // let newImg = new Image(width, height);
        funCagaImagens()
        
    })
    imgProd3.addEventListener("click",(event) => {
        // $("input[id='prodPhoto']").click();
        // let newImg = new Image(width, height);
        funCagaImagens()
        
    })

    let funCagaImagens = function(){
        inputImg.click();
        inputImg.addEventListener("change",(event) => {
            let files = event.target.files; 
            // console.log(files);
            // console.log(files.length);
            for(let i = 0; i< files.length; i++) {
                let file = files[i];
                console.log(file.type);
                let picReader = new FileReader();
                picReader.onload = function(event) {
                    let picFile = event.target;
                    if(i == 0){
                        imgProd1.src = picFile.result;
                        // picReader.readAsDataURL(file);
                    }
                    else if(i == 1){
                        imgProd2.src = picFile.result;
                        // picReader.readAsDataURL(file);
                    }
                    else if(i == 2){
                        imgProd3.src = picFile.result;
                        
                    }
                }
                picReader.readAsDataURL(file);
            }
            // reader.onload = function()
            // {
            // // var output = document.getElementById('output_image');
            // // if (event.target.files.length == 1){

            // // }
            // imgProd1.src = reader.result;
            // }
            // reader.readAsDataURL(event.target.files[0]);
        })
    }
})