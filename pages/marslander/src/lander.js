class Lander {
    constructor (position, img) {
        this.color = "rgba(255, 0, 0, 1)";
        this.position = position;
        this.velocity = new Vector(0,0);
        this.acceleration = new Vector(0,0);
        this.size = 100;

        this.image = img;
    }

    draw (ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    update () {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.acceleration.y = 0.9;
    }
}