import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; 
import { EMPLOYEE_REPOSITORY } from './app/core/domain/repositories/i-employee-repository';
import { EmployeeRepositoryService } from './app/data/repositories/employee-repository-service';
import { GetEmployeesUseCase } from './app/core/domain/use-cases/get-employees-use-case';
import { CreateEmployeeUseCase } from './app/core/domain/use-cases/create-employee-use-case';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideHttpClient(),
    GetEmployeesUseCase,  
    { 
      provide: EMPLOYEE_REPOSITORY,
      useClass: EmployeeRepositoryService
    },
    CreateEmployeeUseCase, 
    { 
      provide: EMPLOYEE_REPOSITORY,
      useClass: EmployeeRepositoryService
    },
     ...appConfig.providers
  ]
})
  .catch((err) => console.error(err));