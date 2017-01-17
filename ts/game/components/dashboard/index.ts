import { Component, OnInit, OnDestroy } from '@angular/core';
import { select } from 'ng2-redux';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'dashboard',
    template: `
    <logo></logo>
    <info-board *ngIf="remains !== undefined" title="Remains" [text]="remains"></info-board>
    <info-board *ngIf="highestSpeed !== undefined" title="Top" [text]="highestSpeed"></info-board>
    `,
    styles: [`
    :host{
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: stretch;
    }
    `]
})
export class DashboardComponent implements OnInit, OnDestroy {
    @select() remains$: Observable<Number>;
    @select() highestSpeed$: Observable<Number>;

    private remains: Number;
    private highestSpeed: Number;
    private subscriptions: Subscription[] = [];

    ngOnInit() {
        this.subscriptions.push(this.remains$.subscribe(val => {
            this.remains = val;
        }));
        this.subscriptions.push(this.highestSpeed$.subscribe(val => {
            this.highestSpeed = val;
        }));
    }

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
}
