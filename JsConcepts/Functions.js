
//output will print undefined
//as in code inti phase, hoisting works in 2 step proces
//first process values in global scope and then in local scope
// in global scope value of x will be 21
// but in local scope since x is not defined so output will be undefined
var x = 21

var fun = function(){
    console.log(x)

    var x= 20
}

fun()



//arrow vs regular functions

//1. syntax
//2. return keyword (in arrow functions, return is implicit)
//3. arrow functions does not have arguments keyword

function a(){
    console.log(arguments)
}

a(1,2,3)

//will throw an error that arguments is not defined
const arrowFunc = () => {
    console.log(arguments)
}

arrowFunc()

//4. use of this keyword
//In Arrow functions this keyword is refred to the outer global scope of where they are defined

const getUser = {
    name: "Pawan",
    func1: function() {
        return () => this.name
    }
}

//this will print "Pawan" as binding of this for arrow function is linked to the outer function scope
console.log(getUser.func1()()) 

//But in Regular functions they have their own this and value of this depends upon where function is called


//5.Arrow functions donot have their own this and due to this they cannot be used as constructor functions

//6. arrow functions do not have any prototype
