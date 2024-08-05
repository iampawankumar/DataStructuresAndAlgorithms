function powerOfNum(num, exponent){
    if(exponent === 0){
        return 1
    }
    return num * powerOfNum(num, exponent - 1)
}


const result = powerOfNum(2,3)
console.log('result', result)