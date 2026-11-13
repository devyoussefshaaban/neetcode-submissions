class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let l = 0
        let map = new Map<string, number>()
        let maxFrequency = 0
        let maxLength = 0

        for(let r = 0; r < s.length; r++){
            map.set(s[r], (map.get(s[r]) ?? 0) + 1)
            maxFrequency = Math.max(maxFrequency, map.get(s[r]))
            
            const windowSize = r - l + 1
            const replacements = windowSize - maxFrequency

            while((r - l + 1) - maxFrequency > k){
                map.set(s[l], map.get(s[l]!) - 1)
                l++
            }
            maxLength = Math.max(maxLength, r  - l + 1)
        }
        return maxLength
    }
}
