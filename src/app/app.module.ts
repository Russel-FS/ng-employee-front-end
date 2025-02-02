import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'; 
import { EMPLOYEE_REPOSITORY } from './domain/repositories/employee-repository';
import { EmployeeImplRepository } from './infrastructure/repositories/employee-impl-repository';
 
@NgModule({
  imports: [ 
   
  ],
  providers: [
    {
      provide: EMPLOYEE_REPOSITORY,
      useClass: EmployeeImplRepository
    }
  ],
})
export class AppModule { }
