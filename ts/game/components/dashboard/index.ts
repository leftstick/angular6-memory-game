import { Component } from '@angular/core';

@Component({
    selector: 'dashboard',
    template: `
    <logo></logo>
    <match-info></match-info>
    <score></score>
    `,
    styles: [`
    :host{
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    `]
})
export class DashboardComponent { }
