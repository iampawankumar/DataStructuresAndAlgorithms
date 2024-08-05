

console.log('start')

function functionOne(msg, cb){

    setTimeout(() => {
        cb(msg)
    }, 1000);

}

function functionTwo(msg, cb){

    setTimeout(() => {
        cb(msg)
    }, 1000);

}

const msgFromFunctionOne = functionOne("Msg from ftn one", function(){
    console.log('callback from ftn one', msg)
})

const msgFromFunctionTwo = functionTwo("Msg from ftn two", function(){
    console.log('callback from ftn two', msg)
})


console.log('end')


//Promise

let promise1 = new Promise((resolve, reject) => {
    if(result === true) resolve('resolved')
    else reject('rejected')
})

promise1.then((response) => {
    console.log('response', response)
}).catch((err) => {
    console.log('errr', err)
})


//Promise combinators
//promise.all, promise.any, promise.race, promise.allSettled



//Polyfill for Promise



const examplePromise = new promise