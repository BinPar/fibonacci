import fibonacci from '../math/iterativeFibonacci';


const fibonacciArr: number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181];

let cnt = 0;
export default test.each(fibonacciArr)('Check the Fibonacci values', (n): void => {  
  expect(fibonacci(cnt++)).toBe(n);
});

test('Test Fibonacci of 45', (): void => {
  expect(fibonacci(45)).toBe(1134903170);
});
