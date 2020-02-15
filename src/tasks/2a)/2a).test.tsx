import { getTeamArticlesDescription } from './2a)';

describe('Should works getTeamArticlesDescription function', () => {
    test('Should works getTeamArticlesDescription function 1 argument', () => {
        const numArg: number = 1;
        const result: string =
            "Oliver wrote an article 'RxJS and redux-observable'.\nJan wrote articles 'RxJS and redux-observable', 'Firebase' and 1 more.\nJakub wrote articles 'MobX in practise', 'RxJS and redux-observable' and 2 more.\nPeter wrote 0 articles.";
        const expectResult = getTeamArticlesDescription(numArg);
        expect(expectResult).toEqual(result);
    });

    test('Should works getTeamArticlesDescription function 2 argument', () => {
        const numArg: number = 2;
        const result: string =
            "Tomas wrote articles 'RxJS and redux-observable' and 'CSS in JS'.\nDrahoslav wrote an article 'RxJS and redux-observable'.\nHonza wrote articles 'RxJS and redux-observable' and 'Firebase'.";
        const expectResult = getTeamArticlesDescription(numArg);
        expect(expectResult).toEqual(result);
    });
});
