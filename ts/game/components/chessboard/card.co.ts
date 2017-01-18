import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ICard, CARDS } from '../../../store/model/card';

@Component({
    selector: 'card',
    template: `
    <div class="card" [class.flipped]="info.flipped" (click)="flip(info)">
        <img class="front" src="{{ info.url }}"/>

        <img class="back" src="{{ backCard.url }}"/>
    </div>
    `,
    styles: [`
    :host {
        width: 100px;
        height: 121px;
        margin-right: 3px;
        cursor: pointer;
        position: relative;
        perspective: 800px;
    }
    .card {
        width: 100%;
        height: 100%;
        transition: transform 1s;
        transform-style: preserve-3d;
    }
    .card.flipped {
        transform: rotateY( 180deg );
    }
    .card img {
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        backface-visibility: hidden;
    }
    .card .back {
        background: blue;
        transform: rotateY( 0deg );
    }
    .card .front {
        background: blue;
        transform: rotateY( 180deg );
    }
    @media screen and (max-width: 450px) {
        :host {
            width: 92px;
            height: 111px;
            margin-right: 1px;
        }
    }
    @media screen and (max-width: 380px) {
        :host {
            width: 85px;
            height: 102px;
            margin-right: 1px;
        }
    }
    @media screen and (max-width: 360px) {
        :host {
            width: 70px;
            height: 84px;
            margin-right: 1px;
        }
    }
    `]
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
