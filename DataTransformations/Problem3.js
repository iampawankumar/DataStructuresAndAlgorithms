
//input
const nestedObject = {
    a: 1,
    b: { c: 2, d: { e: 3, f: 4 } },
    g: 5
  };

  
//output
const output = {
    'a': 1,
    'b.c': 2,
    'b.d.e': 3,
    'b.d.f': 4,
    'g': 5
}


//recursively call the function to prepare the expected output
function traverseObj(obj, result = {}, parentKey = ""){

    for(const key in obj){
        let newKey = parentKey ? `${parentKey}.${key}` : `${key}`
        if(typeof obj[key] === "object" && obj[key] !== null){
            traverseObj(obj[key], result, newKey)
        }else{
            result[newKey] = obj[key]
        }

    }

    return result

}
  

let transformedObj = traverseObj(nestedObject)
console.log("transformedObj", transformedObj)