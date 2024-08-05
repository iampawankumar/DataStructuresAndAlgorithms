function stringify(value) {
    // Check if the value is null, return "null"
    if (value === null) {
        return "null";
    }

    // Check if value is boolean or number, then convert it into a string
    if (typeof value === 'boolean' || typeof value === 'number') {
        return value.toString();
    }

    // Check if the value is a string, return string value
    if (typeof value === 'string') {
        return `"${value}"`;
    }

    // Check if the value is an array, call stringify recursively to handle any nested arrays
    if (Array.isArray(value)) {
        const arrayContents = value.map(element => stringify(element));
        return `[${arrayContents.join(',')}]`;
    }

    // Check if the value is a Date, convert it to ISO string
    if (value instanceof Date) {
        return `"${value.toISOString()}"`;
    }

    // Check if the value is an object, get the keys, and traverse through each key to get the value
    // and pass it into the stringify
    if (typeof value === 'object') {
        const keys = Object.keys(value);
        const keyValuePairString = keys.map(key => {
            const val = value[key];
            const valueString = stringify(val);
            // If the value is undefined or a function, it will not be included
            if (valueString === undefined || typeof val === 'function' || val === undefined) {
                return '';
            }
            return `"${key}":${valueString}`;
        }).filter(pair => pair !== '').join(',');
        // Final key-value pair return
        return `{${keyValuePairString}}`;
    }

    // Handle undefined case
    if (typeof value === 'undefined') {
        return undefined;
    }

    // If value is a function, return undefined (not included in JSON)
    if (typeof value === 'function') {
        return undefined;
    }

    // Fallback for any other cases
    return 'null';
}

// Test cases
const obj = {
    name: "John", //string
    age: 30, //number
    city: "New York",
    skills: ["JavaScript", "React", "Node.js"], //array
    extra: null, //null
    active: true, //boolean
    birthDate: new Date('1990-01-01T00:00:00Z'), //date
    notDefined: undefined, //undefined
    sayHello: function() { console.log('Hello'); } //function 
};

console.log(stringify(obj)); 
// Output: {"name":"John","age":30,"city":"New York","skills":["JavaScript","React","Node.js"],"extra":null,"active":true,"birthDate":"1990-01-01T00:00:00.000Z"}

const nestedArray = [1, "test", [2, 3], { a: 1, b: 2 }, new Date('2020-05-20T12:00:00Z')];
console.log(stringify(nestedArray)); 
// Output: [1,"test",[2,3],{"a":1,"b":2},"2020-05-20T12:00:00.000Z"]
