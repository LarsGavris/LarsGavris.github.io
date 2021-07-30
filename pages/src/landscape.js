class Landscape {
    constructor (width, height) {
        this.color = "rgba(255, 255, 255, 1)";
        this.width = width;
        this.height = height;

        this.points = [];
        let offset = 3 * this.height / 4; 
        for (let i = 0; i < 20; i++) {
            this.points.push( offset + Math.random() * 30);
        }
    }

    draw (ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
            ctx.moveTo(0, this.points[0]);
            for (let i = 0; i < 20; i++) {
                ctx.lineTo(i* (this.width / (20 - 1)), this.points[i]);
            }
            ctx.lineTo(this.width, this.height);
            ctx.lineTo(0, this.height);
        ctx.closePath();
        ctx.fill();
    }
}