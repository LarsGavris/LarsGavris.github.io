class Vector {
    constructor (x, y) {
        Vector.EPSILON = 0.0001; 

        this.x = x;
        this.y = y;
    }

    str() {
        return `(${this.x},${this.y})`
    }


    // operations that do NOT change this vector
    copy () {
        return new Vector(this.x, this.y);
    }
    plus (other) {
        return new Vector(this.x + other.x, this.y + other.y);
    }
    minus (other) {
        return new Vector(this.x - other.x, this.y - other.y);
    }    
    times (factor) {
        return new Vector(this.x * factor, this.y * factor);
    }
    dot (other) {
        return this.x * other.x + this.y * other.y; 
    }
    length () {
        return Math.sqrt(this.dot(this));
    }
    distance (other) {
        return this.minus(other).length();
    }
    

    // operations that DO change this vector
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
    scale (factor) {
        this.x *= factor;
        this.y *= factor;
        return this;
    }
    normalize (len) {
        if (len == undefined) {
            let len = this.length();
        }
        if (len >= Vector.EPSILON) this.scale(1 / len);
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