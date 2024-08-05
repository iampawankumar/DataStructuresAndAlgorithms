

const arr = [1,2,3,1,2]


////first approach via creating a map and complexity is O(n)
function isDuplicate(arr){

    const map = new Map()
    for(let i=0; i<arr.length; i++){
        if(map.has(arr[i])){
            return true
        }
        map.set(arr[i], true)
    }

}

////second approach via using a Set
///true if duplicate present and false if duplicate not present
function isDUplicate2(arr){
    const set = new Set(arr)

    return set.size !== arr.length
}