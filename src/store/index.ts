import { NgModule } from '@angular/core'
import { NgReduxModule, NgRedux } from '@angular-redux/store'

import { IState } from './interface'
import { rootReducer } from './reducer'

@NgModule({
  imports: [NgReduxModule],
  exports: [NgReduxModule]
})
export class ReduxConfigModule {
  constructor(private ngRedux: NgRedux<IState>) {
    this.ngRedux.configureStore(rootReducer, {}, [], [])
  }
}
