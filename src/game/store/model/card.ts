
export class ICard {
    _id?: number;
    flipped: boolean;
    name: string;
    url?: string;
}

export const CARDS: Array<ICard> = [{
    name: '8-ball',
    flipped: false,
    url: 'assets/8-ball.png'
},
{
    name: 'baked-potato',
    flipped: false,
    url: 'assets/baked-potato.png'
},
{
    name: 'dinosaur',
    flipped: false,
    url: 'assets/dinosaur.png'
},
{
    name: 'kronos',
    flipped: false,
    url: 'assets/kronos.png'
},
{
    name: 'rocket',
    flipped: false,
    url: 'assets/rocket.png'
},
{
    name: 'skinny-unicorn',
    flipped: false,
    url: 'assets/skinny-unicorn.png'
},
{
    name: 'that-guy',
    flipped: false,
    url: 'assets/that-guy.png'
},
{
    name: 'zeppelin',
    flipped: false,
    url: 'assets/zeppelin.png'
},
{
    name: 'back',
    flipped: false,
    url: 'assets/back.png'
}];

const CARDS_WITHOUT_BACK = CARDS.filter(c => c.name !== 'back');

export function duplicateCards() {
    return CARDS_WITHOUT_BACK.concat(CARDS_WITHOUT_BACK).map((c, i) => ({
        _id: i,
        name: c.name,
        flipped: c.flipped,
        url: c.url
    }));
}
