class Landscape {
    constructor (width, height) {
        this.color = "rgba(255, 255, 255, 1)";
        this.width = width;
        this.height = height;

        this.points = [];
        this.offset = 3 * this.height / 4; 
        this.variance = 50;
        for (let i = 0; i < 20; i++) {
            let p = new Vector(i* (this.width / (20 - 1)), this.offset + Math.random() * this.variance);
            this.points.push(p);
        }
    }

    draw (ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
            ctx.moveTo(0, this.points[0]);
            this.points.forEach( point => ctx.lineTo(point.x, point.y));
            ctx.lineTo(this.width, this.height);
            ctx.lineTo(0, this.height);
        ctx.closePath();
        ctx.fill();
    }
}