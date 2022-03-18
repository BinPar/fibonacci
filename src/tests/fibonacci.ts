import fibonacci from '../math/fibonacci';

export default test('adds 1 + 2 to equal 3', (): void => {
  expect(fibonacci(0)).toBe(0);
});
