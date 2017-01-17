import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { GameModule } from './game';

if (process.env.NODE_ENV === 'production') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(GameModule);

document.head.removeChild(document.querySelector('#splash-spinner'));
document.body.removeChild(document.querySelector('.spinner'));