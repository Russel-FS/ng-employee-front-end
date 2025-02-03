import { Observable } from "rxjs";
import { Employee } from "../models/employee";
import { EMPLOYEE_REPOSITORY, IEmployeeRepository } from "../repositories/i-employee-repository";
import { Inject, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class GetEmployeesUseCase {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private employeeRepository: IEmployeeRepository
  ) { }

  execute(): Observable<Employee[]> {
    return this.employeeRepository.getEmployees();
  }
}
