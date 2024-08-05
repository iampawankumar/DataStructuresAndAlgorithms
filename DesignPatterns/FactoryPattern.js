

function factory(){
    this.value

    this.testA = function(a){
        return this.value += a
    }

    this.testB = function(b){
        return this.value *= b
    }

}

let newFactory = new factory()
console.log("🚀 ~ newFactory:", newFactory)

let result1 = newFactory.testA(10)
console.log("🚀 ~ result1:", result1)
let result2 = newFactory.testB(10)
console.log("🚀 ~ result2:", result2)

