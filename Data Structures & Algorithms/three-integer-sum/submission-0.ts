class Solution {
    threeSum(nums: number[]): number[][] {
        const sorted = [...nums].sort((a, b) => a - b)
        const result: number[][] = []

        for(let i = 0; i < sorted.length - 2; i++){
            let l = i + 1;
            let r = sorted.length - 1
            
            if(i > 0 && sorted[i] === sorted[i - 1]) continue
            
           while(l < r){
            const currentSum = sorted[i] + sorted[l] + sorted[r]
            if(currentSum > 0){
                r--
            }else if(currentSum < 0){
                l++
            }else{
                result.push([sorted[i], sorted[l], sorted[r]])
                l++
                r--
                while(l < r && sorted[l] === sorted[l - 1]) l++
                while(l < r && sorted[r] === sorted[r + 1]) r++
            }
           }
        }
        return result
    }
}