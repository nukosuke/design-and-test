var expect = require("chai").expect;
var Circle = require("../src/circle");

describe("radius", function() {
   it("load", function() {
        Circle.load();
        expect(Circle.radius[0]).to.equal(10);
        expect(Circle.radius[1]).to.equal(250);
        expect(Circle.radius[2]).to.equal(100);
        expect(Circle.radius[3]).to.equal(1.5);
   });
   
   it("calc area", function() {
        Circle.load();
        Circle.calcArea();
        expect(Circle.area[0]).to.equal(314);
        expect(Circle.area[1]).to.equal(196350);
        expect(Circle.area[2]).to.equal(31416);
        expect(Circle.area[3]).to.equal(7);
   });
});