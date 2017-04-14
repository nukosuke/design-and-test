var expect = require("chai").expect;
var stack = require("../src/stack");

describe("stack object", function() {
    
    it("isEmpty()", function() {
       expect(stack.size()).toBe(0);
    });
});