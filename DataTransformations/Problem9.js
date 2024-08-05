
const input = {
    a: {
        b: {
            c: {
                d: 'D'
            }
        }
    }
}

const result = getValue(input, 'a.b.c.d')
console.log('result', result) //logs the value of d as key d is present in the input object

const result2 = getValue(input, 'a.b.c.d.E')
console.log('result2', result2) //logs undefined as key E is not present in the input object


//split the input parameter (searchKey) and then traverse through that array
//if the key is undefined in the current obj then return undefined
//otherwise assign the key and refer to that in the current object
//traverse through the nested object key and if found then return the value of that key
function getValue(obj, path) {
    const keys = path.split('.');
    let current = obj;
    
    for (let key of keys) {
        if (current[key] === undefined) {
            return undefined;
        }
        current = current[key];
    }
    
    return current;
}

