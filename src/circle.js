var Circle = {
    PI: 3.14159265359,
    
    load: function() {
        this.radius = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n').map(Number);
    },
    
    calcArea: function() {
        var PI = this.PI;
        this.area = this.radius.map(function(radius){
            return Math.round(radius*radius*PI);
        });
    },
    
    print: function() {
        this.area.forEach(function(a) {
            console.log(a)
        });
    }
};

module.exports = Circle;