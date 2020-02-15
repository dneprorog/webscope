import { duplicate } from './1a)';

test('Should works duplicate function', () => {
    const arr = [1, 2];
    const result = [1, 2, 1, 2];
    const expectResult = duplicate(arr);
    expect(expectResult).toEqual(result);
});
