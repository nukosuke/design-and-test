var expect = require("chai").expect;
var Stack = require("../src/stack");

describe("stack object", function() {
    
    it("isEmpty()", function() {
        var stack = new Stack();
        expect(stack.isEmpty()).to.equal(true);
    });
    
    it("testPushAndTop()", function() {
        var stack = new Stack();
        stack.Push(1);
        expect(stack.isEmpty()).to.equal(false);
        expect(stack.Top()).to.equal(1);
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
    
    it("testEmptyPop()", function(done) {
        var stack = new Stack();
        try {
            stack.Pop();
        } catch (e) {
            done();
        }
    });
    
    it("testPushandPop()", function() {
        var stack = new Stack();
        stack.Push(1);
        stack.Pop();
        expect(stack.Size()).to.equal(0);
    });
    
    it("testPushPudhPopTop()", function() {
        var stack = new Stack();
        stack.Push(1);
        stack.Push(2);
        expect(stack.Size()).to.equal(2);
        stack.Pop();
        expect(stack.Top()).to.equal(1);
    });
});