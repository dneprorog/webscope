import { parseNPMVersion } from './1d)';

describe('Should works parseNPMVersion function', () => {
    it('Should works when string has element', () => {
        const str = 'react@16.0.0';
        const result = {
            name: 'react',
            version: '16.0.0'
        };
        const expectResult = parseNPMVersion(str);
        expect(expectResult).toEqual(result);
    });

    it('Should works when string has element', () => {
        const str = '@webscopeio/react-textarea-autocomplete@4.6.1';
        const result = {
            name: '@webscopeio/react-textarea-autocomplete',
            version: '4.6.1'
        };
        const expectResult = parseNPMVersion(str);
        expect(expectResult).toEqual(result);
    });
});
