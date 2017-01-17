import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReduxConfigModule } from '../store';

import { MemoryGameComponent } from './memory.game.co';
import { DashboardComponent } from './components/dashboard';
import { LogoComponent } from './components/dashboard/logo.co';
import { InfoBoardComponent } from './components/dashboard/info.board.co';
import { ChessboardComponent } from './components/chessboard';
import { CardComponent } from './components/chessboard/card.co';
import { StatusComponent } from './components/status';

import { GameActions } from '../store/action';

@NgModule({
    imports: [
        BrowserModule,
        ReduxConfigModule
    ],
    declarations: [
        MemoryGameComponent,
        DashboardComponent,
        LogoComponent,
        InfoBoardComponent,
        ChessboardComponent,
        CardComponent,
        StatusComponent
    ],
    providers: [
        GameActions
    ],
    bootstrap: [MemoryGameComponent]
})
export class GameModule { }
