var Stack = function() {
    this._stack = [];
    this.size = 0;
};
    
Stack.prototype.isEmpty = function(){
    return (this.size === 0);
};
    
Stack.prototype.Push = function(value){
    this.value = value;
    this.size++;
};
    
Stack.prototype.Top = function(){
    return this.value;
    // this._stack.push(1);
};
    
Stack.prototype.Size = function() {
    return this.size;
};

module.exports = Stack;