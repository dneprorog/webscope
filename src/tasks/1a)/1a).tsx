export const duplicate = (x: number[]): number[] => {
    return [...x, ...x];
};

duplicate([1, 2, 3]);
duplicate([1, 2, 3, 4]);
