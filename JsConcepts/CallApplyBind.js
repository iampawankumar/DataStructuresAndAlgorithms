

//call, apply, bind are used to invoke functions via setting thisArg to a function


const personObj = {name: 'Alice'}


function greet(greeting){
    console.log(`${greeting} ${this.name}`)
}


//arguments are passed individually
greet.call(personObj, 'Hello')

//arguments are passed as an array
greet.apply(personObj, ['Hello'])


//arguments are passed individually and then this will be called later
let bindedFunc = greet.bind(personObj, 'Hello')
bindedFunc()



//copy two arrays

const arr1 = [1,2,3]
const arr2 = [4,5,6]

arr1.push.apply(arr1, arr2)
console.log(arr1)



//Polyfill for call method

Function.prototype.myCustomCallMethod = function(context = {}, ...args){
    if(typeof this !== "function"){
        throw new Error('not callable')
    }

    context.fn = this
    context.fn(...args)

}

//Polyfill for apply
Function.prototype.myCustomApplyMethod = function(context = {}, args = []){
    if(typeof this !== "function"){
        throw new Error('not callable')
    }

    if(Array.isArray(args)){
        throw new TypeError("Not an array")
    }

    context.fn = this
    context.fn(...args)

}

//Polyfill for bind
Function.prototype.myCustomBindMethod = function(context = {}, ...args){
    if(typeof this !== "function"){
        throw new Error('not callable')
    }

    context.fn = this

    return function(...newArgs){
        return context.fn(...args, ...newArgs)
    }

}