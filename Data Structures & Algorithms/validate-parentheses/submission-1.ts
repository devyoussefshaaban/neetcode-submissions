class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = []
        for(let i = 0; i < s.length; i++){
            const char = s[i]
            if(
               char === "(" || char === "{" || char === "["
            ){
                stack.push(char)
            }else{
                const last = stack.pop()!

                if(
                    char === ")" && last !== "(" ||
                    char === "}" && last !== "{" ||
                    char === "]" && last !== "["
                )
                return false
            }
        }
        return stack.length === 0
    }
}
