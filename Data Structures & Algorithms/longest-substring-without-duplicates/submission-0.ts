class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let maxL = 0
        let l = 0
        const charSet = new Set<string>()
        for(let r = 0; r < s.length; r++){
            while(charSet.has(s[r])){
                charSet.delete(s[l])
                l++
            }
            charSet.add(s[r])
            maxL = Math.max(maxL, r - l + 1)
        }   
        return maxL
    }
}
