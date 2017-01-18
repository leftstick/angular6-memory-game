import { STATUS } from '../model/status';
import { ICard } from '../model/card';

export interface IState {
    remains?: Number;
    highestSpeed?: Number;
    status?: STATUS;
    cards?: ICard[];
    lastSelectedCard?: ICard;
    elapsedMs?: Number;
};
