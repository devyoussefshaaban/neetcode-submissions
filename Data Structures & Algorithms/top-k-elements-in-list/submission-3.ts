class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
       const dictionary = new Map<number, number>()
       const result = []
       for(const num of nums){
        dictionary.set(num, (dictionary.get(num) ?? 0) + 1)
       }
       const bucket: number[][] = Array.from({length: nums.length + 1}, () => [])
       for(const [num, count] of dictionary){
        bucket[count].push(num)
       }
       for(let i = bucket.length - 1; i >= 0; i--){
        for(const num of bucket[i])
            result.push(num)
       if(result.length === k) return result
       }
    }
}
