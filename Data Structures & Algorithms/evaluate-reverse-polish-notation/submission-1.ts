class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
    
    const stack: number[] = []

    for(let i = 0; i < tokens.length; i++){
        const token = tokens[i]

        if(!isNaN(Number(token))){
            stack.push(Number(token))
        }else{
            const right = stack.pop()!
            const left = stack.pop()!

            let value = 0

            switch(token){
                case "+":
                    value = left + right;
                    break;
                case "-":
                    value = left - right
                    break;
                case "*":
                    value = left * right;
                    break;
                case "/":
                    value = Math.trunc(left / right)
                    break;
            }

            stack.push(value)
        }
    }
    return stack.pop()!
    }
}
