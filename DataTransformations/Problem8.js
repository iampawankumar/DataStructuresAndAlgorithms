const obj = {
    a: 1,
    b: { c: 2, d: { e: 3, f: [4, 5] } },
    g: [6, 7]
};


//output
//make a clone of the input nested object


function deepCloneNestedObject(obj){

    let result = {}

    for(const key in obj){
        if(typeof obj[key] === "object" && obj[key] !== null){
            result = {...deepCloneNestedObject(obj[key])}
        }else{
            result[key] = obj[key]
        }
    }
    return result
}


let result = deepCloneNestedObject(obj)
console.log('result', result)