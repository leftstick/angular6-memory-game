import { platformBrowser } from '@angular/platform-browser';
import { GameModuleNgFactory } from '../aot/ts/game/index.ngfactory';
import { enableProdMode } from '@angular/core';

if (process.env.NODE_ENV === 'production') {
    enableProdMode();
}

platformBrowser().bootstrapModuleFactory(GameModuleNgFactory);

document.head.removeChild(document.querySelector('#splash-spinner'));
document.body.removeChild(document.querySelector('.spinner'));