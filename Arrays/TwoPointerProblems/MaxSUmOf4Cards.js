const input = [6,2,3,4,7,,1,7,1]

const k = 4

//select max of k items from array and return the maxsum
//take from start or from end
//take three from start and one from end
//but in continous order


function computeMaxSum(nums, maxLength){

    let leftSum=0, rightSum = 0, maxSum = 0

    let i = 0
    while (i < maxLength){
        leftSum += nums[i]
        i++
    }
    maxSum = Math.max(maxSum, sum)

    let j = k- 1
    let rightIndex = nums.length - 1
    while (j > 0){
        console.log('j', j)
        leftSum = leftSum - nums[j]
        console.log('leftsum', leftSum)
        rightSum = rightSum + nums[rightIndex]
        console.log('rightsum', rightSum)
        maxSum = Math.max(maxSum, rightSum + leftSum)
         console.log('each iteration', maxSum)
        j--
        rightIndex--
    }

    return maxSum

}