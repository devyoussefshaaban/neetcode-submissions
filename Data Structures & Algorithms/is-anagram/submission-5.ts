class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    /*
s="bbcc"
t="ccbc"
    */
    isAnagram(s: string, t: string): boolean {
        // Comparing the length
        if(t.length !== s.length ) return false
        // Init a map for s and a map for t
        const countS = new Map<string, number>()
        const countT = new Map<string, number>()
        // Set the chars in the maps
        for(const char of s){
            countS.set(char, (countS.get(char) ?? 0) + 1)
        }
        for(const char of t){
            countT.set(char, (countT.get(char) ?? 0) + 1)
        }
        // Compare the 2 maps
        for(const [char, count] of countS){
            if(countT.get(char) !== count) return false
        }
        return true
    }
}

