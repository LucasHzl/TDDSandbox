class Cube {
    constructor(sLength) {
      this.sLength = sLength;
    }
  
    perimeter() {
      return (this.sLength * 4) * 6;
    }
  
    faceArea() {
      return this.sLength * this.sLength;
    }
  
    surface() {
      return 6 * this.faceArea();
    }
  
    volume() {
      return this.sLength * this.sLength * this.sLength;
    }
  }
  
  module.exports = { Cube };
  