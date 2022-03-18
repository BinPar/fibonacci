import fibonacci from '../math/iterativeFibonacci';

const fibonacciArr: number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181];

let cnt = 0;
export default test.each(fibonacciArr)('Check the Fibonacci values', (n): void => {  
  expect(fibonacci(cnt++)).toBe(n);
});

test('Test Fibonacci of 45', (): void => {
  console.time('bigFib')
  expect(fibonacci(45)).toBe(1134903170);
  expect(fibonacci(46)).toBe(1836311903);
  expect(fibonacci(47)).toBe(2971215073);
  expect(fibonacci(50)).toBe(12586269025);
  expect(fibonacci(200)).toBe(2.8057117299251016e+41);
  expect(fibonacci(500)).toBe(1.394232245616977e+104);
  expect(fibonacci(1000)).toBe(4.346655768693743e+208);
  expect(fibonacci(2000)).toBe(Infinity);
  console.timeEnd('bigFib');
});
;
