

class Stack{
    constructor(){
        this.stack = new Array(10)
        this.top = -1
    }


    push(data){
        if(top >= this.stack.length){
            return 'stack is overflow'
        }
        this.top += 1
        this.stack.push(data)
    }

    pop(data){
        if(this.top === -1){
            return 'stack is underflow'
        }
        this.top -= 1
        this.stack.pop(data)
    }

    isEmpty(){
        return this.stack.length
    }

    topElement(){
        return this.stack[-1]
    }

}