class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const hashMap = new Map<number, number>()
        let result = []
        for(const num of nums){
            hashMap.set(num, (hashMap.get(num) ?? 0) + 1)
        }
        const bucket: number[][] = Array.from({length: nums.length + 1}, () => [])

        for(const [num, count] of hashMap) {
            bucket[count].push(num)
        }
        for (let i = bucket.length - 1; i >= 0; i--) {
            for (const num of bucket[i]) {
                result.push(num);

                if (result.length === k) {
                    return result;
                }
            }
        }

        return result
    }
}
