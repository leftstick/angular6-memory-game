import { STATUS } from '../model/status';
import { ICard } from '../model/card';

export interface IState {
    remains?: number;
    highestSpeed?: number;
    status?: STATUS;
    cards?: ICard[];
    lastSelectedCard?: ICard;
    elapsedMs?: number;
};
