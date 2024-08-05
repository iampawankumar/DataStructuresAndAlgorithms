const nums1 = [4,5,6,7,0,0,0]
const nums2 = [1,3,8]
let m= 4
let n= 3
//output m+n in nums1
const output = [1,3,4,5,6,7,8]


function mergeTwoSortedArrays(nums1, m, nums2, n){

    let i= m - 1
    let j= n - 1
    let k= m + n - 1

    while(i>=0 && j >=0){
        if(nums1[i] > nums2[j]){
            nums1[k] = nums1[i]
            k--
            i--
        }else{
            nums1[k] = nums2[j]
            k--
            j--
        }
    }

    while(j>=0){
        nums1[k] = nums2[j]

        k--
        j--
    }

    while(i>=0){
        nums1[k] = nums1[i]

        k--
        i--
    }

    console.log('nums1', nums1)

}