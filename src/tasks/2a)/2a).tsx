const articles = [
    { id: 1, text: 'MobX in practise', authors: [3] },
    { id: 33, text: 'RxJS and redux-observable', authors: [1, 2, 3, 5, 6, 7] },
    { id: 23, text: 'Firebase', authors: [7, 2, 3] },
    { id: 333, text: 'Really cool article' },
    { id: 1234, text: 'Ramda.js and Redux combined', authors: [2] },
    { id: 2, text: 'CSS in JS', authors: [3, 5] }
];

const authors = [
    { id: 1, name: 'Oliver' },
    { id: 2, name: 'Jan' },
    { id: 3, name: 'Jakub' },
    { id: 4, name: 'Peter' },
    { id: 5, name: 'Tomas' },
    { id: 6, name: 'Drahoslav' },
    { id: 7, name: 'Honza' }
];

const teams = [
    { id: 1, name: 'Webscope 1', members: [1, 2, 3, 4] },
    { id: 2, name: 'Webscope 2', members: [5, 6, 7] }
];

interface iAuthor {
    id: number;
    name: string;
}

interface iArticle {
    id: number;
    text: string;
    authors?: number[];
}

interface iTeam {
    id: number;
    name: string;
    members: number[];
}

export const getTeamArticlesDescription = (teamId: number): string => {
    const team = teams.filter((el: iTeam) => el.id === teamId);
    const members = team[0].members;

    const arr: string[] = [];

    for (let index in members) {
        const author = authors.filter(
            (el: iAuthor) => el.id === members[index]
        );

        const arrArticles = articles.filter((el: iArticle) => {
            return el.authors && el.authors.includes(members[index]);
        });

        switch (arrArticles.length) {
            case 0: {
                arr[index] = `${author[0].name} wrote 0 articles.`;
                break;
            }

            case 1: {
                arr[
                    index
                ] = `${author[0].name} wrote an article '${arrArticles[0].text}'.`;
                break;
            }

            case 2: {
                arr[
                    index
                ] = `${author[0].name} wrote articles '${arrArticles[0].text}' and '${arrArticles[1].text}'.`;
                break;
            }

            default: {
                arr[index] = `${author[0].name} wrote articles '${
                    arrArticles[0].text
                }', '${arrArticles[1].text}' and ${arrArticles.length -
                    2} more.`;
            }
        }
    }

    return arr.join('\n');
};
