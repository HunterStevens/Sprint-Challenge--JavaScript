// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidsMaker{
    constructor (attr){
    this.length = attr.length;
    this.width = attr.width;
    this.height = attr.height;
  } 
  volume() {
    const result = this.length * this.width * this.height;
    return result;
  }

  surfaceArea() {
    const result = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    return result;
  }

} 
  const testCuboid = new CuboidsMaker({
    length: 4,
    width: 5,
    height: 5,
  });
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(testCuboid.volume()); // 100
console.log(testCuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.