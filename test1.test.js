const tests = require('./test1');

test('Capitalize', () => {
  expect(tests.capitalize('test1')).toBe('Test1');
});

test('Calculator', () => {
expect(tests.calculator().add(1, 3)).toBe(4);
expect(tests.calculator().subtract(3, 3)).toBe(0);
expect(tests.calculator().multiply(3, 3)).toBe(9);
expect(tests.calculator().divide(3, 3)).toBe(1);
});

test('Reverse String', () => {
expect(tests.reverseString('Hello, world!')).toBe('!dlrow ,olleH');
});

test('CaesarCypher', () => {
expect(tests.caesarCypher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('AnalyzeArray', () => {
expect(tests.analyzeArray([1,8,3,4,2,6])).toEqual({
  average: 4,
  min: 1,
  max: 8,
  length: 6
});
});