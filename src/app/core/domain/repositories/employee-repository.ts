import { Observable } from "rxjs";
import { Employee } from "../models/employee";
import { InjectionToken } from "@angular/core";

export interface EmployeeRepository {
    getEmployees(): Observable<Employee[]>;  
    getEmployeeById(id: string): Observable<Employee>; 
}
export const EMPLOYEE_REPOSITORY = new InjectionToken<EmployeeRepository>('EmployeeRepository');