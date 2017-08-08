import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ICard, CARDS } from '../store/model/card';

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {
    @Input() info: ICard;

    @Output() flipped = new EventEmitter();

    backCard: ICard;

    constructor() {
        this.backCard = CARDS.find(c => c.name === 'back');
    }

    flip(info: ICard) {
        if (info.flipped) {
            return;
        }
        this.flipped.emit(info);
    }
}