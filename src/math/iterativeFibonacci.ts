/**
 * Gets the fibonacci succession Nth value
 * @param n 
 * @returns 
 */

// const listMemo: number[] = [];
const listMemo = new Map<number,number>();

function fibIterative(n: number): number {
    if (listMemo.has(n)) {
        return listMemo.get(n)!;
    }
    for(let i = listMemo.size; i <= n; i+= 1) {
        if (i < 2) {
            listMemo.set(i, i);
        } else {
            listMemo.set(i, listMemo.get(i-1)! + listMemo.get(i-2)!);
        }
    }
    return listMemo.get(n)!;
}


export default fibIterative;
