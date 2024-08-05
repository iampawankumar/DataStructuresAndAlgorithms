//promise race takes an array of promises and in return
//whichever promise is resolved/rejected first will be retruned as result from it



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


////output will be promise2 resolved!
Promise.race(promisesArr).then((response) => {
    console.log('responses', response)
}).catch((reject) => {
    console.log('err', reject)
})

