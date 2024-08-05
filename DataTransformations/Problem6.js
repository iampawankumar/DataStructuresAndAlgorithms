const nestedArray = [1, [2, [3, [4, [5]]]]];

//output
const output = [1,2,3,4,5]

let result = []
function flattenArr(arr, depth){

    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i]) && depth > 0){
            result = [...flattenArr(arr[i], depth - 1)]
        }else{
            result.push(arr[i])
        }
    }
    return result

}

const response = flattenArr(nestedArray, 4)
console.log('response', result)
