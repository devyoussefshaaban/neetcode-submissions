class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x: number): number {
        const MAX = 2 ** 31 - 1
        const LIMIT = Math.trunc(MAX / 10)
        let n = Math.abs(x)
        let reversed = 0
        while(n > 0){
            const digit = n % 10
            if(reversed > LIMIT || (reversed === LIMIT && digit > 7)) return 0
            reversed = reversed * 10 + digit
            n = Math.trunc(n / 10)
        }
        return x < 0 ? -reversed : reversed
    }
}
