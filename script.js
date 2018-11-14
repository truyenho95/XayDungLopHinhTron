let Circle = function(radius, color) {
  this.radius = radius;
  this.color = color;

  this.Circle = function() {
    this.radius = 5;
    this.color = 'red';
  }
  this.getRadius = function() {
    return 2*this.radius*Math.PI;
  }
  this.getArea = function() {
    return this.radius*this.radius*Math.PI;
  }
}

let myCircle = new Circle();
myCircle.Circle();
console.log(myCircle.getRadius().toFixed(2));
console.log(myCircle.getArea().toFixed(2));

let xCircle = new Circle(10,'purple');
console.log(xCircle.getRadius().toFixed(2));
console.log(xCircle.getArea().toFixed(2));