export const last = (x: number[]): number[] | undefined => {
    if (Array.isArray(x) && !x.length) {
        return;
    }

    return [x[x.length - 1]];
};

last([1, 2, 3]);
last([1, 2, 3, 4]);
last([]);
