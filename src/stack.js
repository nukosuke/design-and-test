var Stack = function() {
    this.value = [];
    this.size = 0;
};
    
Stack.prototype.isEmpty = function(){
    return (this.size === 0);
};
    
Stack.prototype.Push = function(value){
    this.value[this.size++] = value;
};
    
Stack.prototype.Top = function(){
    this.emptycheck();
    return this.value[this.size - 1];
    // this._stack.push(1);
};
    
Stack.prototype.Size = function() {
    return this.size;
};

Stack.prototype.Pop = function() {
    this.emptycheck();
    return this.size--;
};

Stack.prototype.emptycheck = function(){
    if(this.isEmpty()) throw new Error;
}

module.exports = Stack;