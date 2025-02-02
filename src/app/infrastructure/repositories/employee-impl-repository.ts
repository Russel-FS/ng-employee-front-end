import { Injectable } from "@angular/core";
import { EmployeeRepository } from "../../domain/repositories/employee-repository";
import { Observable } from "rxjs";
import { Employee } from "../../domain/entities/Employee";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
export class EmployeeImplRepository implements EmployeeRepository {

    private API_URL = 'http://localhost:3000/employees';

    constructor(private http: HttpClient) {}

    getAll(): Observable<Employee[]> {
       return this.http.get<Employee[]>(this.API_URL);
    }
    create(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(this.API_URL, employee);
    }
    
}
