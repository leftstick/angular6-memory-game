import { STATUS } from './status'
import { ICard } from './ICard'

export interface IState {
  remains?: number
  highestSpeed?: number
  status?: STATUS
  cards?: ICard[]
  lastSelectedCard?: ICard
  elapsedMs?: number
}
