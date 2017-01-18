import { combineReducers } from 'redux';
import { shuffle } from '../../core/helper/array';
import { isEmpty, isUndefined } from '../../core/helper/object';
import { STATUS } from '../model/status';
import { duplicateCards, ICard } from '../model/card';
import { IState } from '../model/state';
import { GameActions } from '../action';

export const rootReducer = combineReducers<IState>({
    remains: remainReducer,
    highestSpeed: speedReducer,
    status: statusReducer,
    cards: cardsReducer,
    lastSelectedCard: lastSelectedCardReducer,
    elapsedMs: elapsedReducer
});

export function remainReducer(state: Number, action: any) {
    if (action.type === GameActions.RESET || isEmpty(state)) {
        return 8;
    }
    if (action.type === GameActions.UPDATE_REMAINS) {
        return action.payload;
    }
    return state;
}

export function speedReducer(state: Number, action: any) {
    if (action.type === GameActions.RESET || isEmpty(state)) {
        return localStorage.getItem('highestSpeed') || 9999;
    }
    if (action.type === GameActions.UPDATE_HIGHESTSPEED) {
        if (!localStorage.getItem('highestSpeed')) {
            return localStorage.setItem('highestSpeed', action.payload) || action.payload;
        }
        if (localStorage.getItem('highestSpeed') > action.payload) {
            return localStorage.setItem('highestSpeed', action.payload) || action.payload;
        }
    }
    return state;
}

export function statusReducer(state: STATUS, action: any) {
    if (action.type === GameActions.RESET || isEmpty(state)) {
        return STATUS.READY;
    }
    if (action.type === GameActions.UPDATE_STATUS) {
        return action.payload;
    }
    return state;
}

export function cardsReducer(state: ICard[], action: any) {
    if (action.type === GameActions.RESET || isEmpty(state)) {
        return shuffle(duplicateCards());
    }
    if (action.type === GameActions.UPDATE_CARD_FLIPPED) {
        return state.map(c => c._id === action.payload._id ? { _id: c._id, name: c.name, flipped: !c.flipped, url: c.url } : c);
    }
    return state;
}

export function lastSelectedCardReducer(state: ICard, action: any) {
    if (action.type === GameActions.RESET || isUndefined(state)) {
        return null;
    }
    if (action.type === GameActions.UPDATE_LAST_SELECTED_CARD) {
        return action.payload;
    }
    return state;
}

export function elapsedReducer(state: Number, action: any) {
    if (action.type === GameActions.RESET || isEmpty(state)) {
        return 0;
    }
    if (action.type === GameActions.UPDATE_ELAPSED) {
        return action.payload;
    }
    return state;
}
