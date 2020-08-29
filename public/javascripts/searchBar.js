function $(element){
    return document.querySelector(element)
}

window.addEventListener("load",()=>{

    let buscador = $("#buscador")
    let dataList = $("#searchList")
    let formSearch = $("#searchBar")
    let optionCreated = []

    buscador.addEventListener("click",(event) => {
        // console.log("conectado");
        buscador.placeholder = ""
    })
    buscador.addEventListener("keyup",(event) => {
        if(event.key === "Enter"){
            // alert("Enter was just pressed.");
            formSearch.submit()
        }
        // if (event.key === "Backspace") {
        //     optionCreated = []
        // }
        // console.log(event.key);
        let keyWords = buscador.value
        // console.log(keyWords.length);
        // console.log(keyWords);
        // console.log("llamo a api");
        if (keyWords != "" && keyWords.length > 0) {
            fetch(`http://localhost:3000/api/search/${keyWords}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(searchOpt) {
                // console.log(searchOpt);
                for (let i = 0; i < searchOpt.length; i++) {
                    if (!optionCreated.includes(searchOpt[i])) {
                        // console.log(searchOpt[i]);
                        optionCreated.push(searchOpt[i])
                        let option = document.createElement('option');
                        option.value = searchOpt[i];
                        dataList.appendChild(option);
                    }
                }
                // let option = document.createElement('option');
                // option.value = searchOpt[0];
                // dataList.appendChild(option);
            })
        }
        
        // event.preventDefault()
        // console.log(event.key);
        // if(event.key === "Enter"){
        //     alert("Enter was just pressed.");
        // }
        // console.log("submitido");
        // console.log(buscador.value);
    })

})