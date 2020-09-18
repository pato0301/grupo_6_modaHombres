function $(element) {
    return document.querySelector(element)
}

window.addEventListener("load", () => {

    let userImg = $("#userAvatar")
    let inputImg = $("input[id='userPhoto']")

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