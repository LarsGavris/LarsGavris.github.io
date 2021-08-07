// let sprites = preloadSprites("lander.png", "lander_flame_bottom.png");

let zoom = [50,50];
let animator = new Animator("./res/sprites");
animator.load("lander", 1, zoom)
    .then(() => {
        return animator.load("lander_flame_bottom", 5, zoom);
    })
    .then(() => {
        main();
    });

let canvas, ctx;
let landscape, lander;
let keyPressManager;
let frame;

let main = () => {
    canvas = document.getElementById("marslander-canvas");
    ctx = canvas.getContext("2d");
    
    landscape = new Landscape(800, 600);
    lander = new Lander(new Vector(100,100));
    keyPressManager = new KeyPressManager();
    
    frame = 0;

    window.requestAnimationFrame(gameLoop);
}

let gameLoop = (timeStamp) => {
    frame++;
    lander.update();

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    landscape.draw(ctx);
    lander.draw(ctx, frame);
    
    window.requestAnimationFrame(gameLoop);
}

// if (sprites[Object.keys(sprites)[0]].complete) main();
// else sprites[Object.keys(sprites)[0]].addEventListener('load', main);
