import { Component, Input, Output, EventEmitter } from '@angular/core'

import { CARDS } from '../../store/model/card'
import { ICard } from '../../store/interface'

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() info: ICard

  @Output() flipped = new EventEmitter()

  backCard: ICard

  constructor() {
    this.backCard = CARDS.find(c => c.name === 'back')
  }

  flip(info: ICard) {
    if (info.flipped) {
      return
    }
    this.flipped.emit(info)
  }
}
