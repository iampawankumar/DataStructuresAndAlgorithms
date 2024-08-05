
//it returns all the promise results whether they are resolved/rejected
//in the resolve then block 

//even when all promises are rejected it will still resolve those promises in the then block


let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise1 resolved')
    }, 1000);
})

let promise2 = Promise.resolve('promise2 resolved!')

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise3 resolved')
    }, 500);
})

let promisesArr = [promise1, promise2, promise3]


Promise.allSettled(promisesArr).then((response) => {
    console.log('responses', response)
}).catch((reject) => {
    console.log('err', reject)
})