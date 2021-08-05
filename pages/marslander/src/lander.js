class Lander {
    constructor (position, img) {
        this.color = "rgba(255, 0, 0, 1)";
        this.position = position;
        this.velocity = new Vector(0,0);
        this.acceleration = new Vector(0,0);
        this.size = 50;

        this.image = img;
        this.thrust = {
            up:     0,
            down:   0,
            left:   0,
            right:  0,
            speed:  0.1,
            limit:  0.5
        }
    }

    draw (ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    update () {
        // toggle thrust depending on pressed keys
        if (keyPressManager.keys["KeyW"]) this.thrust.up += this.thrust.speed;
        else this.thrust.up = 0;
        if (keyPressManager.keys["KeyA"]) this.thrust.left += this.thrust.speed;
        else this.thrust.left = 0;
        if (keyPressManager.keys["KeyS"]) this.thrust.down += this.thrust.speed;
        else this.thrust.down = 0;
        if (keyPressManager.keys["KeyD"]) this.thrust.right += this.thrust.speed;
        else this.thrust.right = 0;

        // limit thrust
        if (this.thrust.up > this.thrust.limit) this.thrust.up = this.thrust.limit;
        if (this.thrust.left > this.thrust.limit) this.thrust.left = this.thrust.limit;
        if (this.thrust.down > this.thrust.limit) this.thrust.down = this.thrust.limit;
        if (this.thrust.right > this.thrust.limit) this.thrust.right = this.thrust.limit;

        // apply thrust to acceleration
        this.acceleration.y = -this.thrust.up + this.thrust.down;
        this.acceleration.x = -this.thrust.left + this.thrust.right;
        
        // apply acceleration to velocity
        this.velocity.add(this.acceleration);
        
        // add gravity
        this.velocity.y += 0.1;

        // apply drag
        this.velocity.scale(0.99);

        // apply veloctiy to position
        this.position.add(this.velocity);
    }
}