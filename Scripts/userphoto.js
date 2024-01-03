const foto = window.document.getElementById("genero")
const masc = window.document.querySelector("#masc")
const femi = window.document.querySelector("#femi")
const outr = window.document.querySelector("#outr")
const userphoto = window.document.getElementById("userphoto")


masc.addEventListener("change", function(){
    foto.style.backgroundImage = 'url("../assets/Login/Male.png")'
})
femi.addEventListener("change", function(){
    foto.style.backgroundImage = 'url("../assets/Login/Female.png")'
})
outr.addEventListener("change", function(){
    foto.style.backgroundImage = 'url("../assets/Login/Intersex.png")'
})

