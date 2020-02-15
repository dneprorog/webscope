export const last = (x: number[]): number[] | undefined => {
    if (Array.isArray(x) && !x.length) {
        return;
    }

    return [x[x.length - 1]];
};

console.log('last =====>', last([1, 2, 3]));
console.log('last =====>', last([1, 2, 3, 4]));
console.log('last =====>', last([]));
