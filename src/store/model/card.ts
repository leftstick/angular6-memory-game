import { ICard } from '../interface';
import { environment } from '../../environments/environment';

const CARD_NAMES = ['8-ball', 'baked-potato', 'dinosaur', 'kronos', 'rocket', 'skinny-unicorn', 'that-guy', 'zeppelin', 'back'];

export const CARDS: Array<ICard> = CARD_NAMES.map(n => ({
    name: n,
    flipped: false,
    url: `${environment.deployUrl}assets/${n}.png`
}));

const CARDS_WITHOUT_BACK = CARDS.filter(c => c.name !== 'back');

export function getGameCards() {
    return CARDS_WITHOUT_BACK.concat(CARDS_WITHOUT_BACK).map((c, i) => ({
        _id: i,
        name: c.name,
        flipped: c.flipped,
        url: c.url
    }));
}
