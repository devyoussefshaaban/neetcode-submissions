class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = new Map<number, Set<string>>()
        const cols = new Map<number, Set<string>>()
        const boxes = new Map<string, Set<string>>()
        for(let r = 0; r < 9; r++){
            for(let c = 0; c < 9;c++){
                const num = board[r][c]

                if(num === ".") continue

                const boxKey = `${Math.floor(r/3)},${Math.floor(c/3)}`

                if(
                    rows.get(r)?.has(num) ||
                    cols.get(c)?.has(num) ||
                    boxes.get(boxKey)?.has(num)
                ) return false

                if(!rows.has(r)) rows.set(r, new Set())
                if(!cols.has(c)) cols.set(c, new Set())
                if(!boxes.has(boxKey)) boxes.set(boxKey, new Set())

                rows.get(r)!.add(num)
                cols.get(c)!.add(num)
                boxes.get(boxKey)!.add(num)
            }
        }
        return true
    }
}
