

//target = 9, return indices that make up to the target
// return [0,1]
const arr = [2,7,11,15] 


///create a map and then for each iteration check whether the element exist in map 
//if exist then return indices otherwise keep on adding elements in the map and return [] if not found
function twoSUm(arr, target){

    const map = new Map()

    for(let i=0; i<arr.length; i++){
        const element = target - arr[i]
        if(map.has(element)){
            return [arr[i], map.get(element)]
        }
        map.set(arr[i], i)
    }
    return []

}