

//output => 6 [4,-1,2,1]
const arr = [-2,1,-3,4,-1,2,1,-5,4]



///kadene's algorithm
function maxSubarray(nums){

    let maxSum = nums[0]
    let sum = 0

    for(let i=0; i<nums.length; i++){
        sum += nums[i]
        maxSum = Math.max(maxSum, sum)
        if(sum < 0){
            sum = 0
        }
    }
    return maxSum

}