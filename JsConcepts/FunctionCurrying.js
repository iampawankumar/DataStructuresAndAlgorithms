//currying is function transformation

//func(a)(b)
//it means each item function is invoked it returns the inner function
//for function to be curried, number of functions === number of arguments passed into the function


function sum(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}


let result = sum(2)(6)(1)
console.log('result', result)


function evaluate(operationType){

    return function(a){
        return function(b){
            if(operationType === "sum"){
                return a + b
            }else if(operationType === "multiply"){
                return a * b
            }
        }
    }

}
//evaluate("sum")(4)(2)
//evaluate("multiply")(4)(2)


//infinite currying
function sum(a){
    return function(b){
        if(b) return add(a + b)
        return a
    }
}

const result2 = sum(3)(4)()


//convert a normal function to a curried function
// func(a,b,c) => func(a)(b)(c)

const regularSumFunc = (a,b,c,d) => a + b + c + d

const totalSum = curry(regularSumFunc)

console.log(totalSum(1)(2)(3)(4))

function curry(fn){
    return function curriedSum(...args){
        if(args.length >= fn.length){
            return fn(...args)
        }else{
            return function(...next){
                return curriedSum(...args, ...next)
            }
        }
    }
}






//uses of function currying
//1. partial application where fucntion can be called anytime
//Currying allows you to create partially applied functions, which can be useful for reusability. You can create a function that pre-fixes some arguments and leaves the rest to be provided later.
//2. Currying can help in creating higher-order functions, which can manipulate or create other functions dynamically.
//example-> 
function logger(level) {
    return function(message) {
      console.log(`[${level}] ${message}`);
    };
  }
  
  const infoLogger = logger('INFO');
  const errorLogger = logger('ERROR');
  
  infoLogger('This is an info message.'); // [INFO] This is an info message.
  errorLogger('This is an error message.'); // [ERROR] This is an error message.

  
//3. Function Composition:
//Currying facilitates function composition, making it easier to combine simple functions to build more complex ones.




