export const unique = (x: number[]): number[] => {
    const filterArray: number[] = x.filter(
        (item, index, self) => self.indexOf(item) === index
    );
    return [...filterArray];
};

console.log('unique ======>', unique([1, 2, 3, 3, 4]));
console.log('unique ======>', unique([1, 2, 2, 3, 4, 5, 3]));
console.log('unique ======>', unique([]));
