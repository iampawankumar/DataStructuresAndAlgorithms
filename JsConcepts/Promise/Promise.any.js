
//it returns only the promise fulfilled 
//if all promises rejected then it thrwos an error

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

////output will be promise3 resolved!
Promise.any(promisesArr).then((response) => {
    console.log('responses', response)
}).catch((reject) => {
    console.log('err', reject)
})



