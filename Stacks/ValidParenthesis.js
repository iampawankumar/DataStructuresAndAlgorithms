

//true
const input = '(){}[]'

//false
const input2 = '(]{}'


function validateParenthesis(inputStr){

    let stack = []

    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for(let i=0; i<inputStr.length; i++){
        let char = inputStr[i]

        if(map[char]){
            let topElement = stack.length > 0 ? '#' : stack.pop()
            if(topElement !== map[char]){
                return false
            }
        }else{
            stack.push(inputStr[i])
        }

    }

    return stack.length === 0

}