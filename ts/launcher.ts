import 'reflect-metadata';
import 'zone.js/dist/zone';
import { enableProdMode, NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { removeNgStyles, createNewHosts, createInputTransfer, bootloader } from '@angularclass/hmr';
import { Splash } from 'splash-screen';


import Game from './game';


@NgModule({
    imports: [BrowserModule],
    declarations: [Game],
    bootstrap: [Game]
})
class MainModule {
    constructor(public appRef: ApplicationRef) { }
    hmrOnInit(store: any) {
        if (!store || !store.state) { return; }
        console.log('HMR store', JSON.stringify(store, null, 2));
        // restore state
        // restore input values
        if ('restoreInputValues' in store) { store.restoreInputValues(); }
        this.appRef.tick();
        Object.keys(store).forEach(prop => delete store[prop]);
    }
    hmrOnDestroy(store: any) {
        const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // recreate elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // save input values
        store.restoreInputValues = createInputTransfer();
        // remove styles
        removeNgStyles();
    }
    hmrAfterDestroy(store: any) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}


export default class Launcher {

    constructor() {
        enableProdMode();
    }

    destroySplash(): void {
        var _this = this;
        Splash.destroy();
        (<any>require('splash-screen/dist/splash.min.css')).unuse();
        setTimeout(function () {
            if (Splash.isRunning()) {
                _this.destroySplash();
            }
        }, 100);
    }

    launch() {
        const main = function () {
            return platformBrowserDynamic().bootstrapModule(MainModule);
        };
        bootloader(main);
        main();
    }

    run(): void {
        this.destroySplash();
        this.launch();
    }
}
