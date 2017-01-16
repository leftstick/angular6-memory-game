import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MemoryGameComponent } from './memory.game.co';


@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        MemoryGameComponent
    ],
    bootstrap: [MemoryGameComponent]
})
export class GameModule { }
