let canvas = document.getElementById("marslander-canvas");
let ctx = canvas.getContext("2d");

let landscape = new Landscape(800, 600);
landscape.draw(ctx);

let lander = new Lander([100,100]);
lander.draw(ctx);