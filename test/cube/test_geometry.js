const assert = require('assert');
const geometry = require('../../cube/geometry.js');
const Cube = require('../../cube/cube.js').Cube;


describe('cube geometry', function () {
  it('should calculate the perimeter of a cube wich each side = 3', function () {
    let result = geometry.perimeter(3);
    assert.equal(result, 72);
  });
  it('should calculate the area of one face of a cube wich each side = 3',
    function () {
      let result = geometry.faceArea(3)
      assert.equal(result, 9);
    });
    it('should calculate the area of a cube wich each side = 3',
    function () {
      let result = geometry.cubeArea(3)
      assert.equal(result, 54);
    });
    it('should calculate the volume of a cube wich each side = 3',
    function () {
      let result = geometry.cubeVolume(3)
      assert.equal(result, 27);
    });
});


describe('geometry cube class', function () {
  it('should calculate the perimeter of a cube wich each side = 3', function () {
    let cube = new Cube(3);
    let result = cube.perimeter();
    assert.equal(result, 72);
  });
  

  it('should calculate the area of one face of a cube wich each side = 3', function () {
    let cube = new Cube(3);
    let result = cube.faceArea();
    assert.equal(result, 9);
  });

  it('should calculate the area of a cube wich each side = 3', function () {
    let cube = new Cube(3);
    let result = cube.surface();
    assert.equal(result, 54);
  });

  it('should calculate the volume of a cube wich each side = 3', function () {
    let cube = new Cube(3);
    let result = cube.volume();
    assert.equal(result, 27);
  });
});
