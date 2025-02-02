import { InjectionToken } from '@angular/core';
import { Observable } from "rxjs";
import { Employee } from "../entities/Employee";

export interface EmployeeRepository {
    getAll(): Observable<Employee[]>;
    create(employee: Employee): Observable<Employee>;
}

export const EMPLOYEE_REPOSITORY = new InjectionToken<EmployeeRepository>('EMPLOYEE_REPOSITORY');
