import { combineReducers } from 'redux';
import { IState } from '../state';
import { STATUS } from '../model/status';


export const rootReducer = combineReducers<IState>({
    remains: remainReducer,
    highestSpeed: speedReducer,
    status: statusReducer,
    elapsedMs: elapsedReducer
});

export function remainReducer(state: Number, action: any) {
    if (action.type === 'RESET' || !status) {
        return 8;
    }
    return state;
}

export function speedReducer(state: Number, action: any) {
    if (action.type === 'RESET' || !status) {
        return localStorage.getItem('highestSpeed') || 9999;
    }
    return state;
}

export function statusReducer(state: Number, action: any) {
    if (action.type === 'RESET' || !status) {
        return STATUS.READY;
    }
    return state;
}

export function elapsedReducer(state: Number, action: any) {
    if (action.type === 'RESET' || !status) {
        return 0;
    }
    return state;
}
