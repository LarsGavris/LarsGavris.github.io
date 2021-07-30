class Lander {
    constructor (position) {
        this.color = "rgba(255, 0, 0, 1)";
        this.position = position;
        this.size = 10;
    }

    draw (ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
            ctx.arc(this.position[0], this.position[1], this.size, 0, 2 * Math.PI);
        ctx.fill();
    }
}