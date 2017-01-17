import { Component } from '@angular/core';

import { GameActions } from '../store/action';
import { STATUS } from '../store/model/status';

@Component({
    selector: 'memory-game',
    template: `
    <dashboard></dashboard>
    <chessboard></chessboard>
    <status></status>
    `,
    styles: [`
    :host {
        width: 450px;
        height: 670px;
        border: 4px solid #BDBDBD;
        border-radius: 2px;
        background-color: #faf8ef;
        padding: 10px;
        display: flex;
        flex-direction: column;
    }
    @media screen and (max-width: 450px) {
        :host{
            width: 100%;
            height: 100%;
            justify-content: space-around;
        }
    }
    >>> a {
        text-decoration: none;
        color: #fff;
    }
    `]
})
export class MemoryGameComponent {
    constructor(public actions: GameActions) {
        this.actions.updateStatus(STATUS.READY);
        this.actions.reset();
    }
}
