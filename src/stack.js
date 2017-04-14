var Stack = function() {
    this._stack = [];
};
    
Stack.prototype.isEmpty = function(){
    return true;
};
    
Stack.prototype.Push = function(value){
    this.value = value;
};
    
Stack.prototype.Top = function(){
    return this.value;
    // this._stack.push(1);
};
    
Stack.prototype.Size = function() {
    return 1;
};

module.exports = Stack;