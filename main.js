let checkOutros = document.getElementById("checkOutros")
let textOutros = document.getElementById("textOutros")

checkOutros.addEventListener("click", () => {
    if(checkOutros.checked === true){
        textOutros.disabled = false;
    }
    else {
        textOutros.disabled = true;
    }
})

