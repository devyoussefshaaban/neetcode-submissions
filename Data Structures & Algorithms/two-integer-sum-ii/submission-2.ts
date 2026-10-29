class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
       let leftPointer = 0;
       let rightPointer = numbers.length - 1
    
        for(let i = leftPointer; i < numbers.length; i++){
            while(leftPointer < rightPointer){
                if(numbers[leftPointer] + numbers[rightPointer] > target){
                    rightPointer--;
                }
                else if(numbers[leftPointer] + numbers[rightPointer] < target){
                    leftPointer++
                }
                else {
                    return [leftPointer+1, rightPointer+1]
                }
            }
        }
    }
}
