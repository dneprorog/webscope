import { unique } from './1c)';

describe('Should works unique function', () => {
    it('Should works when array has duplicated elements', () => {
        const arr = [1, 2, 3, 4, 1, 3];
        const result = [1, 2, 3, 4];
        const expectResult = unique(arr);
        expect(expectResult).toEqual(result);
    });

    it('Should works when array is empty', () => {
        const arr: [] = [];
        const result: [] = [];
        const expectResult = unique(arr);
        expect(expectResult).toEqual(result);
    });
});
