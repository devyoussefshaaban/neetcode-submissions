class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s: string, t: string): boolean {
        let l = 0
        let r = 0
        while(l < s.length && r < t.length){
            if(s[l] === t[r]){
                l++
            }
            r++
        }
        return l === s.length
    }
}
