var Cylinder = {

    height : 4,
    radius : 7,

};

Cylinder.prototype.Volume = function () {
    var radius = this.cyl_diameter / 2;
    return Cylinder.height * Math.PI * Cylinder.radius * Cylinder.radius;
  };
  
  console.log('volume =', cyl.Volume().toFixed(4));