class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let res = ""
        for(const str of strs){
            res += `${str.length}#${str}`
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let i = 0
        const result = []
        while(i < str.length){
            let j = i
            while(str[j] !== "#"){
                j++
            }      
            const length = Number(str.slice(i, j))
            const word = str.slice(j+1, j+1+length)
                 result.push(word)
                 i= j+1+length 
        }
        return result
    }
}
