/**
 * Gets the fibonacci succession Nth value
 * @param n 
 * @returns 
 */

const listMemo: number[] = [];

const fibonacci = (n: number): number => {
    if (n < 2) {
        return n;
    }
    if (listMemo[n] === undefined) {
        listMemo[n] = fibonacci(n - 2) + fibonacci(n - 1);
    }
    return listMemo[n];
};

// fibonacci(5)
// >> fibonacci(4)
//  >> fibonacci(3)
//  >> fibonacci(2)
//    >> fibonacci(1)
//    >> fibonacci(0)
// >> fibonacci(3)
//  >> fibonacci(2)
//  >> fibonacci(1)

export default fibonacci;
