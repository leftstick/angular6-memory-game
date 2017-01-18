import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'dashboard',
    template: `
    <logo></logo>
    <info-board title="Remains" [text]="remains$ | async"></info-board>
    <info-board title="Top" [text]="highestSpeed$ | async"></info-board>
    `,
    styles: [`
    :host{
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        flex-shrink: 0;
    }
    `]
})
export class DashboardComponent {
    @select() remains$: Observable<Number>;
    @select() highestSpeed$: Observable<Number>;
}
