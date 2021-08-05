class Vector {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    add (other) {
        this.x += other.x;
        this.y += other.y;
        return this;
    }

    subtract (other) {
        this.x -= other.x;
        this.y -= other.y;
        return this;
    }

    dot (other) {
        return this.x * other.x + this.y * other.y; 
    }

    scale (factor) {
        this.x *= factor;
        this.y *= factor;
        return this;
    }

    length () {
        return Math.sqrt(this.dot(this));
    }
}