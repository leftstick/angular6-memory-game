import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { GameActions } from '../../../store/action';
import { ICard } from '../../../store/model/card';

@Component({
    selector: 'chessboard',
    template: `
    <card *ngFor="let card of cards$ | async" [info]="card" (flipped)="actions.flipCard($event)"></card>
    `,
    styles: [`
    :host {
        margin-top: 20px;
        width: 100%;
        background-color: #fff;
        height: 530px;
        border-radius: 4px;
        padding: 10px 5px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: space-around;
    }
    card:nth-child(4n) {
        margin-right: 0px;
    }
    @media screen and (max-width: 450px) {
        :host {
            height: 480px;
            padding: 10px 0px;
        }
    }
    @media screen and (max-width: 370px) {
        :host {
            height: 450px;
        }
    }
    `]
})
export class ChessboardComponent {

    @select() cards$: Observable<ICard[]>;

    constructor(private actions: GameActions) { }

}
