
let collider = new Collider();

let a = new Vector(0,0);
let b = new Vector(1,0);
let line = new Line(a,b);

let p = new Vector(1,0);

console.log(line.str(), p.str());
console.log(collider.pointLine(p,line));