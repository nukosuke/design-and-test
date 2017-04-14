var expect = require("chai").expect;
var Stack = require("../src/stack");

describe("stack object", function() {
    
    it("isEmpty()", function() {
        var stack = new Stack();
        expect(stack.isEmpty()).to.equal(true);
    });
    
    it("isPushandTop()", function() {
        var stack = new Stack();
        stack.Push(1);
        expect(stack.Top()).to.equal(1);
    });
    
    it("testPushAndSize()", function() {
        var stack = new Stack();
        stack.Push(1);
        stack.Push(2);
        expect(stack.Size()).to.equal(2);
    });
    
    
});