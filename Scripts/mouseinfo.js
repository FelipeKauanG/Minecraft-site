const info = window.document.createElement("div")
window.document.body.appendChild(info)
const pos = window.document.createElement("p")


window.document.addEventListener("mousemove", mouseTrack)

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
info.style = "padding: 5px; color: white; width: fit-content;background-color: black;border-radius: 5px;"
window.document.body.appendChild(pos)