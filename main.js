canvas = document.getElementById("myCanvas");
ctx = canvas.getContext('2d');
mouseEvent = "empty";
colour = "red";
width = 5;
radious = 10;




canvas.addEventListener("mouseDown", my_mousedown());

function my_mousedown() {
colour = document.getElementById("colour").value;
width = document.getElementById("width").value;
radious = document.getElementById("radious").value;

console.log(colour);
console.log(width);
console.log(radious);

mouseEvent = "mouseDown"
}

canvas.addEventListener("mouseUp", my_mouseup());

function my_mouseup() {
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseLeave", my_mouseleave());

function my_mouseleave() {
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mouseMove", my_mousemove(e));

function my_mousemove(e) {
    
    currentX = e.clientX - canvas.offsetLeft;
    currentY = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width;
        ctx.arc(currentX, currentY, radious, 0, 2*Math.PI);
        ctx.stroke();
    }

    mouseEvent = "mouseMove"
}

canvas.addEventListener("touchStart", my_touchStart())

function my_touchStart() {
    colour = document.getElementById("colour").value;
    width = document.getElementById("width").value;
    radious = document.getElementById("radious").value;
    
    console.log(colour);
    console.log(width);
    console.log(radious);
    
    mouseEvent = "mouseDown"}
canvas.addEventListener("touchMove", my_touchmove())
    function my_touchmove(e) {
    
        currentX = e.touches[0].clientX - canvas.offsetLeft;
        currentY = e.touches[0].clientY - canvas.offsetTop;
    
        if(mouseEvent == "mouseDown") {
            ctx.beginPath();
            ctx.strokeStyle = colour;
            ctx.lineWidth = width;
            ctx.arc(currentX, currentY, radious, 0, 2*Math.PI);
            ctx.stroke();
        }
    
        mouseEvent = "mouseMove"
    }