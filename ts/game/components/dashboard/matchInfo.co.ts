import { Component } from '@angular/core';

@Component({
    selector: 'match-info',
    template: `
    <span>Remains</span>
    <h2>{{ remains }}</h2>
    `,
    styles: [`
    :host {
        width: 120px;
        height: 100px;
        padding: 10px;
        background-color: #bbada0;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: #eae0d1;
    }
    span {
        font-size: 19px;
        font-weight: bold;
        display: block;
        width: 100%;
        text-align: center;
    }
    h2 {
        color: #fff;
    }
    @media screen and (max-width: 450px) {
        :host {
            width: 105px;
        }
    }
    @media screen and (max-width: 380px) {
        :host {
            width: 95px;
        }
    }
    @media screen and (max-width: 360px) {
        :host {
            width: 90px;
        }
    }
    `]
})
export class MatchInfoComponent { }
