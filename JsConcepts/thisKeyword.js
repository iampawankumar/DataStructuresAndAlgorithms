//"this keyword" depends upon the context in which we are using it


//Implement code mentioned below-

const result = cal.add(10).multiply(20).subtract(10).divide(2)

const cal = {
    total: 0,

    add(a){
        this.total += a
        return this
    },

    multiply(b){
        this.total *= b
        return this
    },

    subtract(c){
        this.total -= c
        return this
    },

    divide(d){
        this.total /= d
        return this.total
    }

}