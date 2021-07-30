let canvas = document.getElementById("marslander-canvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "rgba(255,255,255,1)";
ctx.fillRect(0,0,100,100);

let landscape = Landscape(800, 600);
landscape.draw(ctx);

