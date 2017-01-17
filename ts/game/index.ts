import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReduxConfigModule } from '../store';

import { MemoryGameComponent } from './memory.game.co';
import { DashboardComponent } from './components/dashboard';
import { LogoComponent } from './components/dashboard/logo.co';
import { MatchInfoComponent } from './components/dashboard/match.info.co';
import { ScoreComponent } from './components/dashboard/score.co';
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
        MatchInfoComponent,
        ScoreComponent,
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
