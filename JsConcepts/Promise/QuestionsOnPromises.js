

console.log('start')


const promise1 = new Promise((Resolve, reject) =>{
    console.log(1)
    Resolve(2)
})

console.log('end')

//output will be 

//start 1 end 2