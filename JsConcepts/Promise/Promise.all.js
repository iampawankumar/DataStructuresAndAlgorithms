let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise1 resolved!')
    }, 100);
})

let promise2 = Promise.resolve(10)

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise3 resolved!')
    }, 100);
})

let promisesArr = [promise1,promise2,promise3]


//working of a promise.all in js
Promise.all(promisesArr).then((response) => {
    console.log('responses', response)
}).catch((reject) => {
    console.log('err', reject)
})


//Polyfill for promise.all
//returns a new promise with resolve and reject 
//resolvedCount equals to the promises length
if (!Promise.all) {
    Promise.all = function(promises) {
      return new Promise(function(resolve, reject) {
        if (!Array.isArray(promises)) {
          return reject(new TypeError('Argument is not an iterable'));
        }
  
        let resolvedCount = 0;
        const resultArray = new Array(promises.length);
  
        promises.forEach((promise, index) => {
          Promise.resolve(promise).then(
            value => {
              resolvedCount++;
              resultArray[index] = value;
  
              if (resolvedCount === promises.length) {
                resolve(resultArray);
              }
            },
            error => {
              reject(error);
            }
          );
        });
  
        if (promises.length === 0) {
          resolve([]);
        }
      });
    };
  }
  