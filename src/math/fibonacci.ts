/**
 * Gets the fibonacci succession Nth value
 * @param n 
 * @returns 
 */
const fibonacci = (n: number): number => {
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 2) + fibonacci(n - 1);
};

// EXECUTION TIME FOR 45: 18.782ms

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
