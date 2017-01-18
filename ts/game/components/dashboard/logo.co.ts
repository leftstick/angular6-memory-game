import { Component } from '@angular/core';

@Component({
    selector: 'logo',
    template: `
    <h1 class="logo">
        <a href="https://github.com/leftstick/angular2-memory-game" target="_blank">Memory</a>
    </h1>
    `,
    styles: [`
    :host {
        width: 160px;
        padding: 5px;
        border-radius: 5px;
        background-color: #5979ac;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width: 450px) {
        :host {
            width: 150px;
        }
    }
    @media screen and (max-width: 380px) {
        :host {
            width: 140px;
        }
    }
    @media screen and (max-width: 360px) {
        :host {
            width: 110px;
        }
        a {
            font-size: 18px;
        }
    }
    `]
})
export class LogoComponent { }
