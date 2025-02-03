import { Inject, Injectable } from "@angular/core";
import { EMPLOYEE_REPOSITORY, IEmployeeRepository } from "../repositories/i-employee-repository";

@Injectable({providedIn: 'root'})
export class DeleteEmployeeUseCase {
    constructor(
        @Inject(EMPLOYEE_REPOSITORY)
        private employeeRepository: IEmployeeRepository
    ) {}

    execute(id: number | null) {
        return this.employeeRepository.deleteEmployee(id);
    }
}

