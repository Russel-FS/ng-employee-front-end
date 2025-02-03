import { Inject, Injectable } from "@angular/core";
import { EMPLOYEE_REPOSITORY, IEmployeeRepository } from "../repositories/i-employee-repository";
import { Observable } from "rxjs";
import { Employee } from "../models/employee";

@Injectable({
    providedIn: 'root' 
  })
export class CreateEmployeeUseCase {
    constructor(
        @Inject(EMPLOYEE_REPOSITORY)
        private employeeRepository: IEmployeeRepository
    ) { 
    }

    execute(employee : any) : Observable<Employee>   {
        return this.employeeRepository.createEmployee(employee);
    }
}
