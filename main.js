let checkOutrosInteresses = document.getElementById("checkOutros")
let textOutrosInteresses = document.getElementById("textOutros")

let selectPais = document.getElementById("selectPais")
let textOutroPais = document.getElementById("textOutroPais")



checkOutrosInteresses.addEventListener("click", () => {
    if(checkOutrosInteresses.checked === true){
        textOutrosInteresses.disabled = false;
    }
    else {
        textOutrosInteresses.disabled = true;
    }
})

selectPais.addEventListener("change", () => {
    if(selectPais.value === "outro"){
        textOutroPais.disabled = false;
    }
    else {
        textOutroPais.disabled = true;
    }
})

