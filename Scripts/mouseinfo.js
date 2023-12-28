const info = window.document.createElement("div")
window.document.body.appendChild(info)
const pos = window.document.createElement("p")
const itemcarousel = window.document.querySelectorAll(".carousel-item")
window.document.addEventListener("mousemove", mouseTrack)

for(let i = 0; i <itemcarousel.length;i++){
    itemcarousel[i].addEventListener("mouseenter", function(){
        info.style.display = "block"
    })
}

for(let o = 0;o< itemcarousel.length;o++ ){
    itemcarousel[o].addEventListener("mouseout", function(){
        info.style.display = "none"
    })
}
function mouseTrack(event){
    var posX = event.pageX
    var posY = event.pageY
    info.innerHTML = `X:${posX}\nY:${posY}`
    info.style.position = "absolute"
    info.style.overflow = "hidden"
    info.style.top = `${posY+15}px`
    info.style.zIndex = "999"
    

    if (posX > window.innerWidth-90){
        info.style.left = `${posX-100}px`

    }
    else{
        info.style.left = `${posX+15}px`

    }
}

info.id = "info"
info.style = "color: white ;padding: 5px; width: fit-content;background-color: black;border-radius: 5px;"
window.document.body.appendChild(pos)
