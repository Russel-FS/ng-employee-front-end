import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { employeeReducer } from './state/reducers/employee-reducer';
import { EmployeeEffects } from './state/effects/employee-effects';

@NgModule({
  imports: [ 
    StoreModule.forRoot({ employees: employeeReducer }),
    EffectsModule.forRoot([EmployeeEffects])
  ],
})
export class AppModule { }
