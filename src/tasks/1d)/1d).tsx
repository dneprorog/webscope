interface iObj {
    name: string;
    version: string;
}

export const parseNPMVersion = (text: string): iObj => {
    const textArr: string[] = text.split('@');

    console.log(textArr);

    if (textArr.length > 2) {
        return {
            name: '@' + textArr[1],
            version: textArr[2]
        };
    } else {
        return {
            name: textArr[0],
            version: textArr[1]
        };
    }
};

parseNPMVersion('react@16.0.0');
parseNPMVersion('@webscopeio/react-textarea-autocomplete@4.6.1');
