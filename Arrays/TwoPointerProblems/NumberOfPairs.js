const input = [1,4,4,5,5,5,6,6,11]

const targtSum = 11

//as there are total 6 pairs from input that equals to sum = 11
const output = 6


function findPairs(nums, target){

    let left = 0
    let right = nums.length - 1
    let k = target
    let count = 0
    let sum

    while(left < right){
        sum = nums[left] + nums[right]
        if(sum === k){

            if(nums[left] === nums[right]){
                let n = right - left + 1
                count = (n* (n-1)/ 2)
                break
            }else{

                let leftCount = 1
                let rightCount = 1

                while(left + 1 < right && nums[left] === nums[left + 1]){
                    leftCount++
                    left++
                }

                while(right - 1 > left && nums[right] === nums[right - 1]){
                    rightCount++
                    right--
                }

                count += leftCount * rightCount
                left++
                right--

            }

        }else if(sum < k){
            left++
        }else if(sum > k){
            right--
        }
    }

    return count

}