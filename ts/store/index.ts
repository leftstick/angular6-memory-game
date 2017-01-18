import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from 'ng2-redux';

import { IState } from './model/state';
import { rootReducer } from './reducer';

@NgModule({
    imports: [
        NgReduxModule
    ],
    exports: [NgReduxModule]
})
export class ReduxConfigModule {
    constructor(private ngRedux: NgRedux<IState>) {
        this.ngRedux.configureStore(
            rootReducer,
            {},
            [],
            []);
    }
}
