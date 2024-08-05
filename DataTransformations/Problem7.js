
const nestedObject = {
    a: 1,
    b: { c: 2, d: { e: 3, f: 4 } },
    g: 5
  };

//output
const output = 15


function returnRecursiveSum(nestedObject){
    let value = 0
    for(const key in nestedObject){
        if(typeof nestedObject[key] === 'object' && nestedObject[key] !== null){
            console.log('value', value)
            value += returnRecursiveSum(nestedObject[key])
        }else{
            console.log('nestedObject[key]', nestedObject[key])
            value += nestedObject[key]
        }
    }
    return value
}

let result = returnRecursiveSum(nestedObject)
console.log('result', result)