import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; 
import { EmployeeComponent } from './presentation/components/employee/employee.component';
import { EmployeeRepositoryService } from './data/repositories/employee-repository-service'; 
import { EMPLOYEE_REPOSITORY } from './core/domain/repositories/employee-repository';

@NgModule({
  
  imports: [
    BrowserModule,
    EmployeeComponent
  ],
  providers: [
    provideHttpClient(), 
    EmployeeRepositoryService,
    { 
      provide: EMPLOYEE_REPOSITORY, 
      useClass: EmployeeRepositoryService
    }
  ], 
})
export class AppModule { }