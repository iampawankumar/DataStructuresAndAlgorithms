//map
//transform an array and returns a new array

let arr = [1,2,3,4]

//polyfill for map
Array.prototype.myCustomMap = function(cb) {
    let resultArr = []

    for(let i=0; i<this.length; i++){
        resultArr.push(cb(this[i], i, this))
    }
    return resultArr

}

let result = arr.myCustomMap((item, i, arr) => {
    return item * 2
})




//filter
Array.prototype.myCustomFilter = function(cb){
    let resultArr = []

    for(let i=0; i<this.length; i++){
        if(cb(this[i], i, this)){
            resultArr.push(this[i])
        }
    }
    return resultArr

}


//reduce
Array.prototype.myCustomReduce = function (cb, acc){
    let accumulator = acc
    for(let i=0; i< this.length; i++){
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
    }
    return accumulator
}

arr.reduce((acc, item, i, arr) => {
    return acc + item
}, init=0)