import { add, subtract, multiply, divide } from '../src/index';

test('2+2=4', () => {
    expect(add(2, 2)).toBe(4);
})