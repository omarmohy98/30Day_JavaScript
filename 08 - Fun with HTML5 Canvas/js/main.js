let ourCanv = document.getElementById("Our-canv");
ourCanv.width = window.innerWidth;
ourCanv.height = window.innerHeight;
let ctx = ourCanv.getContext("2d");
ctx.lineWidth = 100;
ctx.lineJoin = "round";
ctx.lineCap = "round";
let isDrawing = false,
    direction = true,
    lineX = 0,
    lineY = 0,
    hue = 0;
function draw(event) {
    if (!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lineX, lineY);
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    [lineX, lineY] = [event.offsetX, event.offsetY];
    hue++;
    if (hue >= 360) {
        hue = 0;
    }
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}
ourCanv.addEventListener("mousemove", draw);
ourCanv.addEventListener("mousedown", (event) => {
    isDrawing = true;
    [lineX, lineY] = [event.offsetX, event.offsetY];
});
ourCanv.addEventListener("mouseup", () => (isDrawing = false));
ourCanv.addEventListener("mouseout", () => (isDrawing = false));
