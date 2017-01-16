import { Component } from '@angular/core';

@Component({
    selector: 'chessboard',
    template: `
    
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
    .container:nth-child(4n) {
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
export class ChessboardComponent { }
