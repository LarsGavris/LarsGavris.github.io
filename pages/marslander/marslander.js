let zoom = [50,50];
let animator = new Animator("./res/sprites");

animator.loadMany({
    sprites: [
        {
            spriteName: "lander",
            frameCount: 1,
            size: zoom
        },
        {
            spriteName: "lander_flame_bottom",
            frameCount: 5,
            size: zoom
        }
    ]
}).then(() => main());

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