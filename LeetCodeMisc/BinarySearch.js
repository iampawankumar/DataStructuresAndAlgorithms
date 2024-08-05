
function binarySearch(arr, target, left=0, right = arr.length - 1){

    if(left > right){
        return - 1
    }

    let mid = Math.floor((left + right) / 2)

    if(arr[mid] === target){
        return arr[mid]
    }

    if(arr[mid] > target){
        return binarySearch(arr, target, left, mid - 1)
    }
    return binarySearch(arr, target, mid + 1, right)

}