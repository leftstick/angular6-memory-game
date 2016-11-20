import 'reflect-metadata';
import 'zone.js/dist/zone';

import { enableProdMode, NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { removeNgStyles, createNewHosts, createInputTransfer, bootloader } from '@angularclass/hmr';

import Game from './game';


@NgModule({
    imports: [BrowserModule],
    declarations: [Game],
    bootstrap: [Game]
})
class MainModule {
    constructor(public appRef: ApplicationRef) { }
    hmrOnInit(store: any) {
        if (!store || !store.state) {
            return;
        }
        console.log('HMR store', JSON.stringify(store, null, 2));
        if ('restoreInputValues' in store) { store.restoreInputValues(); }
        this.appRef.tick();
        Object.keys(store).forEach(prop => delete store[prop]);
    }
    hmrOnDestroy(store: any) {
        const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        store.disposeOldHosts = createNewHosts(cmpLocation);
        store.restoreInputValues = createInputTransfer();
        removeNgStyles();
    }
    hmrAfterDestroy(store: any) {
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}

const main = function () {
    document.head.removeChild(document.querySelector('#splash-spinner'));
    document.body.removeChild(document.querySelector('.spinner'));
    return platformBrowserDynamic().bootstrapModule(MainModule);
};

bootloader(main);
