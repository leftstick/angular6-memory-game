import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { ICard } from '../../../store/model/card';

import * as URL_8BALL from '../../../../img/8-ball.png';
import * as URL_BAKEDPOTATO from '../../../../img/baked-potato.png';
import * as URL_DINOSAUR from '../../../../img/dinosaur.png';
import * as URL_KRONOS from '../../../../img/kronos.png';
import * as URL_ROCKET from '../../../../img/rocket.png';
import * as URL_SKINNYUNICORN from '../../../../img/skinny-unicorn.png';
import * as URL_THATGUY from '../../../../img/that-guy.png';
import * as URL_ZEPPELIN from '../../../../img/zeppelin.png';
import * as URL_BACK from '../../../../img/back.png';

@Component({
    selector: 'card',
    template: `
    <div class="card" [class.flipped]="info.flipped" (click)="flip(info)">
        <img class="front" *ngIf="info.name === '8-ball'" src="${URL_8BALL}"/>
        <img class="front" *ngIf="info.name === 'baked-potato'" src="${URL_BAKEDPOTATO}"/>
        <img class="front" *ngIf="info.name === 'dinosaur'" src="${URL_DINOSAUR}"/>
        <img class="front" *ngIf="info.name === 'kronos'" src="${URL_KRONOS}"/>
        <img class="front" *ngIf="info.name === 'rocket'" src="${URL_ROCKET}"/>
        <img class="front" *ngIf="info.name === 'skinny-unicorn'" src="${URL_THATGUY}"/>
        <img class="front" *ngIf="info.name === 'that-guy'" src="${URL_SKINNYUNICORN}"/>
        <img class="front" *ngIf="info.name === 'zeppelin'" src="${URL_ZEPPELIN}"/>

        <img class="back" src="${URL_BACK}"/>
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
export class CardComponent implements OnInit {

    @Input() info: ICard;

    @Output() flipped = new EventEmitter();

    ngOnInit() {
    }

    flip(info: ICard) {
        if (info.flipped) {
            return;
        }
        this.flipped.emit(info);
    }
}
