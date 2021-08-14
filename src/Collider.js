class Collider {
    constructor() {
        Collider.EPSILON = 1;
    }

    pointLine(point, line) {        
        let pa = point.distance(line.start);
        let pb = point.distance(line.end);
        let ab = line.length();
        return pa + pb - ab <= Collider.EPSILON;
    }
};

class Line {
    constructor(a, b) {
        this.start = a;
        this.end = b;
    }
    str() {
        return this.start.str() + "->" + this.end.str();
    }

    length () {
        return this.start.distance(this.end);
    }
}