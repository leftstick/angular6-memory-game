import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { ReduxConfigModule } from '../store'

import { MemoryComponent } from './memory.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { LogoComponent } from './dashboard/logo.component'
import { InfoComponent } from './dashboard/info.component'
import { ChessboardComponent } from './chessboard/chessboard.component'
import { CardComponent } from './chessboard/card.component'
import { StatusComponent } from './status/status.component'

import { GameActions } from '../store/action'

@NgModule({
  imports: [BrowserModule, ReduxConfigModule],
  declarations: [
    MemoryComponent,
    DashboardComponent,
    LogoComponent,
    InfoComponent,
    ChessboardComponent,
    CardComponent,
    StatusComponent
  ],
  providers: [GameActions],
  bootstrap: [MemoryComponent]
})
export class MemoryModule {}
