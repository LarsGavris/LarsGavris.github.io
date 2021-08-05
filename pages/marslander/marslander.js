let sprites = preloadSprites("lander.png");

let canvas, ctx;
let landscape, lander;
let keyPressManager;


let main = () => {
    canvas = document.getElementById("marslander-canvas");
    ctx = canvas.getContext("2d");
    
    landscape = new Landscape(800, 600);
    lander = new Lander(new Vector(100,100), sprites["lander.png"]);
    keyPressManager = new KeyPressManager();

    window.requestAnimationFrame(gameLoop);
}

let gameLoop = (timeStamp) => {

    lander.update();

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    landscape.draw(ctx);
    lander.draw(ctx);
    
    window.requestAnimationFrame(gameLoop);
}

if (sprites[Object.keys(sprites)[0]].complete) main();
else sprites[Object.keys(sprites)[0]].addEventListener('load', main);
