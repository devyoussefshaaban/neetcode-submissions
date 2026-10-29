class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // Inint a map result
        const result = new Map<string, string[]>()
        // Loop in the strs
        for(const str of strs){
            const count = new Array(26).fill(0)
            for(const char of str){
                const index = char.charCodeAt(0) - 97
                count[index]++
            }
            const key = count.join(",")
            if(!result.has(key)){
                result.set(key, [])
            }
            result.get(key).push(str)
        }
        return Array.from(result.values())
    }

}
