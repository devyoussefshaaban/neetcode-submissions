class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const countS = new Map<string, number>()
        const countT = new Map<string, number>()

        if(s.length !== t.length) return false
    
        for(const char of s){
            countS.set(char, (countS.get(char) ?? 0) + 1)
        }

        
        for(const char of t){
            countT.set(char, (countT.get(char) ?? 0) + 1)
        }

        for(const [char, count] of countS){
            if(countT.get(char) !== count) return false
        }
        return true
    }
}
