
class Solution {
    search(nums: number[], target: number): number {
            let left = 0
    let right = nums.length - 1
    while(left <= right){
        const mid = Math.floor((left + right) / 2)
        if(nums[mid] === target) return mid

        // Left is sorted
        if(nums[left] <= nums[mid]){
            if(nums[left] <= target && target < nums[mid]){
                right = mid - 1
            }else{
                left = mid + 1
            }
        }else{
        // Right is sorted
            if(nums[mid] < target && nums[right] >= target){
                left = mid + 1
            }else{
                right = mid - 1
            }
        }
    }
    return -1
    }
}
