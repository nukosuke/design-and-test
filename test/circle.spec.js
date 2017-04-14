var expect = require("chai").expect;
var Circle = require("../src/circle");

describe("radius", function() {
   it("load", function() {
        Circle.load();
        
        [10, 250, 100, 1.5] // expected result
        .forEach(function(t, i) {
            expect(Circle.radius[i]).to.equal(t);
        });
   });
   
   it("calc area", function() {
        Circle.load();
        Circle.calcArea();
        
        [314, 196350, 31416, 7] // expected result
        .forEach(function(t, i) {
            expect(Circle.area[i]).to.equal(t);
        });
   });
});