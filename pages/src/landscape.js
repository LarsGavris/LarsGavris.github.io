class Landscape {
    constructor (width, height) {
        this.color = "rgba(255,255,255,1)";
        this.width = width;
        this.height = height;
    }

    draw (ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, this.width, this.height);
    }
}