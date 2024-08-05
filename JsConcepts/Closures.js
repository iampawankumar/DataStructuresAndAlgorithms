 //closure is when a function bundled together with its lexical
 //env. and its surrounding state
 //meaning a function have access to outer state/variables

 //every closure have three scopes
 //1. local scope
 //2. outer function scope
 //3. global scope

 function outerFunc(){
    let num =4

    function innerFunc(){
        console.log(num)
    }

    return innerFunc()

 }

 let result = outerFunc()
 console.log(result())



 function createBase(val){
    let num = val
    function a(val2){
        return num + val2
    }

 }

 //the value 6 will be preserved in the outer function scope
 let addSix = createBase(6)
 console.log(addSix(10)) //output 16
 console.log(addSix(21)) //output 27


//make counter variable private to the counterWrapper function
 function counterWrapper(){

    let _counter = 0

    function increment(){
        return ++_counter
    }

    function decrement(){
        return --_counter
    }

    return {
        increment, decrement
    }
 }

 let newCounter = counterWrapper()
 console.log(newCounter.increment())
 console.log(newCounter.increment())
 console.log(newCounter.decrement())


 ////mae function run only once

 function once(func, context){
    let ran

    return function(){
        if(func){
            ran = func.apply(context || this, arguments)
            func = null
        }

        return ran
    }

 }

 //now this function will run only once
 const hello = once(() => console.log("hello"))

 hello()
 hello()
 hello()
 hello()


 //memoization function

 function memoizedFunc(func, context){
    let cacheStore = {}

    return function(...args){
        var args = JSON.stringify(args)
        if(!cacheStore[args]){
            cacheStore[args] = func.call(context || this, ...args)
        }
        return cacheStore[args]
    }

 }

 function product(num1, num2){
    for(let i=0; i<10000; i++){}

    return num1 * num2
 }

 let product = memoizedFunc(product)
 console.log(product(3,4))
 console.log(product(3,4))

