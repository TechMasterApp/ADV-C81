var canvas = document.getElementById("myCanvas")
var pencil = canvas.getContext("2d")
canvas.addEventListener("mousedown", md)

function md(e) {
    var selectColor = document.getElementById("dropdown").value
    mouseX = e.clientX - canvas.offsetLeft
    mouseY = e.clientY - canvas.offsetTop
    pencil.beginPath()
    pencil.strokeStyle = selectColor
    pencil.lineWidth = 3
    pencil.arc(mouseX, mouseY, 50, 0, 360)
    pencil.stroke()
}