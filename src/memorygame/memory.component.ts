import { Component, OnInit } from '@angular/core'

import { GameActions } from '../store/action'
import { STATUS } from '../store/interface'

@Component({
  selector: 'memory-game',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit {
  constructor(private actions: GameActions) {}

  ngOnInit() {
    this.actions.updateStatus(STATUS.READY)
    this.actions.reset()
  }
}
