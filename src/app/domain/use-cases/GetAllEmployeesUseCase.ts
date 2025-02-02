import { Injectable, Inject } from "@angular/core";
import { EmployeeRepository, EMPLOYEE_REPOSITORY } from "../repositories/employee-repository";
import { Observable } from "rxjs";
import { Employee } from "../entities/Employee";

@Injectable({
    providedIn: 'root'
})
export class GetAllEmployeesUseCase {
    constructor(@Inject(EMPLOYEE_REPOSITORY) private employeeRepository: EmployeeRepository) {}

    execute(): Observable<Employee[]> {
        return this.employeeRepository.getAll();
    }
}
