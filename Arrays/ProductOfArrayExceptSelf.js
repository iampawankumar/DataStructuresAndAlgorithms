

///output => [24, 12, 8, 6]
const arr = [1,2,3,4]


function productOfArrayExceptSelf(arr){

    const n = arr.length
    const result = new Array.fill(n)

    let leftProduct = 1

    for(let i=0; i<n; i++){
        result[i] *= leftProduct
        leftProduct *= arr[i]
    }

    let rightProduct = 1
    for(let i= n-1; i >=0; i--){
        result[i] *= rightProduct
        rightProduct *= arr[i]
    }

    return result

}
