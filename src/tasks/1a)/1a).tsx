export const duplicate = (x: number[]) => {
    return [...x, ...x];
};

console.log('duplicate =====>', duplicate([1, 2, 3]));
console.log('duplicate =====>', duplicate([1, 2, 3, 4]));
