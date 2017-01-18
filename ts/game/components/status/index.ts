import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { GameActions } from '../../../store/action';
import { stop } from '../../../core/helper/event';
import { STATUS } from '../../../store/model/status';

@Component({
    selector: 'status',
    template: `
    <span *ngIf="(status$ | async) === ${STATUS.READY}">Ready</span>
    <span *ngIf="(status$ | async) === ${STATUS.PLAYING}">Playing</span>
    <span class="hand" *ngIf="(status$ | async) === ${STATUS.PASS}" (click)="reset($event)">Play again</span>
    <span class="elapsed">{{ elapsedMs$ | async }} s</span>
    `,
    styles: [`
    :host {
        position: relative;
        margin-top: 10px;
        width: 100%;
        height: 20px;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
    }
    .hand {
        cursor: pointer;
    }
    .elapsed {
        position: absolute;
        right: 10px;
        font-size: 15px;
        font-weight: normal;
    }
    `]
})
export class StatusComponent {
    @select() status$: Observable<Number>;
    @select() elapsedMs$: Observable<Number>;

    constructor(private actions: GameActions) { }

    reset(e: Event) {
        stop(e);
        this.actions.reset();
    }
}
