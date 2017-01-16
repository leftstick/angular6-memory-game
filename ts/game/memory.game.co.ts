import { Component } from '@angular/core';

@Component({
    selector: 'memory-game',
    template: `
    <dashboard></dashboard>
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
    `]
})
export class MemoryGameComponent { }
