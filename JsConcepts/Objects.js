

const obj = {
    name: 'test'
}

const obj1 = {}

obj1[obj] = 456

//above will output 456, as we cannot have a key of an object as another object
//we can use Map for this if we really want to do this



//shallow copy and deep copy

//shaloow copy means some references of old object still exist in new object

//deep copy means that new object is a complete new one and does not have
//any references of the old object

//ways to deep copy obj

//Object.assign({}, objToCLone)
//{...objToCLone}
//structuredCLone() (internal js function)
//lodash library function
//JSON.parse(JSON.stringify(objToCLone)) this will work even for nested objects but 
//object assign and spread operator approach will only work for non-nested objects



//PROPTERTY FLAGS AND DESCRIPTORS
// Object properties, besides a value, have three special attributes (so-called “flags”):

// writable – if true, the value can be changed, otherwise it’s read-only.
// enumerable – if true, then listed in loops, otherwise not listed.
// configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.


//this method gives entire details about the property of object
//Object.getOwnPropertyDescriptor(obj, propertyName)

//define a property
//Object.defineProperty(obj, propertyName, descriptor)

//for multiple properties
// Object.defineProperties(obj, {
//     prop1: descriptor1,
//     prop2: descriptor2
//     // ...
//   });



//propterty getters and setters in an object
let newObject = {
    name: 'Test user',

    get getUserName(){
        return this.name
    },

    set setNewName(newValue){
        this.name = newValue
    }
}

let result = newObject.getUserName
console.log('result', result)

newObject.setNewName = 'Test'
console.log(newObject.getUserName)