import { last } from './1b)';

describe('Should works last function', () => {
    it('Should works when array has element', () => {
        const arr = [1, 2, 3];
        const result = [3];
        const expectResult = last(arr);
        expect(expectResult).toEqual(result);
    });

    it('Should works when array is empty', () => {
        const arr: any[] = [];
        const result = undefined;
        const expectResult = last(arr);
        expect(expectResult).toEqual(result);
    });
});
