class Lander {
    constructor (position, img) {
        this.color = "rgba(255, 0, 0, 1)";
        this.position = position;
        this.velocity = new Vector(0,0);
        this.acceleration = new Vector(0,0);

        this.collisionPoints = [
            new Vector(10,40),
            new Vector(40,40)
        ];
        this.collision = [];

        this.thrust = {
            up:     0,
            down:   0,
            left:   0,
            right:  0,
            speed:  0.1,
            limit:  0.5
        }
    }

    draw (ctx, gameFrame) {
        animator.draw("lander", ctx, this.position, gameFrame);
        if (this.thrust.up > 0) {
            animator.draw("lander_flame_bottom", ctx, this.position, gameFrame);
        }
        // ctx.strokeStyle = "white";
        // ctx.lineWidth = 1;
        // this.getCollisionPoints().forEach( p => {
        //     ctx.beginPath();
        //     ctx.arc(p.x, p.y, 2, 0, 2 * Math.PI);
        //     ctx.stroke();  
        // })
    }

    update () {
        // toggle thrust depending on pressed keys
        if (keyPressManager.keys["KeyW"] || keyPressManager.keys["ArrowUp"]) this.thrust.up += this.thrust.speed;
        else this.thrust.up = 0;
        if (keyPressManager.keys["KeyA"] || keyPressManager.keys["ArrowLeft"]) this.thrust.left += this.thrust.speed;
        else this.thrust.left = 0;
        if (keyPressManager.keys["KeyS"] || keyPressManager.keys["ArrowDown"]) this.thrust.down += this.thrust.speed;
        else this.thrust.down = 0;
        if (keyPressManager.keys["KeyD"] || keyPressManager.keys["ArrowRight"]) this.thrust.right += this.thrust.speed;
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

        // add collision influence
        if (this.collision.length > 0) {
            this.velocity.scale(0); 
            alert("Crash!");
            running = false;
        }

        // apply veloctiy to position
        this.position.add(this.velocity);
    }

    getCollisionPoints() {
        return this.collisionPoints.map(p => { return p.plus(this.position); });
    }

    addCollision(lineSegment) {
        this.collision.push(lineSegment);
    }
    resetCollision() {
        this.collision = [];
    }
}