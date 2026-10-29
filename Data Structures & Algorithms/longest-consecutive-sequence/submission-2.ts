class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const sorted = nums.sort((a, b) => a - b)
        let longest = 0
        let current:number[] = []
       
        for(const num of sorted){
            if(current.length === 0) current.push(num)
            else if(num === current[current.length - 1]) continue
            else if (num === current[current.length - 1] + 1){
                current.push(num)
            }else{
                longest = Math.max(longest, current.length)
                current = [num]
            }
        }

        return Math.max(longest, current.length)
    }
}
