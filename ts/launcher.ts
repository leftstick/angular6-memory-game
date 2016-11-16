import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Splash } from 'splash-screen';

import MainModule from './main';

class Launcher {

    constructor() {
        enableProdMode();
    }

    destroySplash(): void {
        var _this = this;
        Splash.destroy();
        (<any>require('splash-screen/dist/splash.min.css')).unuse();
        setTimeout(function() {
            if (Splash.isRunning()) {
                _this.destroySplash();
            }
        }, 100);
    }

    launch() {
        platformBrowserDynamic().bootstrapModule(MainModule);
    }

    run(): void {
        this.destroySplash();
        this.launch();
    }
}

export default Launcher;