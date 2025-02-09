import { Observable } from "rxjs";
import { Employee } from "../models/employee";
import { InjectionToken } from "@angular/core";

export interface IEmployeeRepository {
    getEmployees(): Observable<Employee[]>;  
    getEmployeeById(id: string): Observable<Employee>; 
    createEmployee(employee: Employee): Observable<Employee>;
    deleteEmployee(id: number | null): Observable<void>;
} 
export const EMPLOYEE_REPOSITORY = new InjectionToken<IEmployeeRepository>('EMPLOYEE_REPOSITORY');