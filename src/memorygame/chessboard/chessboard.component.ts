import { Component } from '@angular/core'
import { select } from '@angular-redux/store'
import { Observable } from 'rxjs/Observable'

import { GameActions } from '../../store/action'
import { ICard } from '../../store/interface'

@Component({
  selector: 'chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.css']
})
export class ChessboardComponent {
  @select() cards$: Observable<ICard[]>

  constructor(private actions: GameActions) {}

  trackByCards(index: number, card: ICard) {
    return card._id
  }
}
