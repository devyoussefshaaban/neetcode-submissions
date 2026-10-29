class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const normalized = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        return normalized.split("").reverse().join("") === normalized
    }
}
