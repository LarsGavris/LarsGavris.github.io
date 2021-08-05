class Vector {
    constructor (x, y) {
        this.x = x;
        this.y = y;

        this.EPSILON = 0.0001; 
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

    normalize (len) {
        if (len == undefined) {
            let len = this.length();
        }
        if (len >= this.EPSILON) this.scale(1 / len);
        return this;
    }
    
    capLength (cap) {
        if (cap == 0) {
            this.x = 0;
            this.y = 0;
        }
        else if (cap > 0) {
            let len = this.length();
            if (len > cap) this.normalize(len).scale(cap);
        }
        else if (cap < 0) {
            let len = this.length();
            if (len < cap) this.normalize(len).scale(cap);
        }
        return this;
    }
}