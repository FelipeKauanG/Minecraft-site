const btnClose = window.document.querySelector(".btn-close");
const Termos = window.document.querySelector(".alert.alert-info")

btnClose.addEventListener("click", function(){
    Termos.remove()
})

