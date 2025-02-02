import { HttpClient } from "@angular/common/http";
import { EmployeeRepository } from "../../core/domain/repositories/employee-repository";
import { map, Observable } from "rxjs";
import { Employee } from "../../core/domain/models/employee";
import { EmployeeDto } from "../dtos/employee-dto";
import { EmployeeMapper } from "../mappers/employee-mapper";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
export class EmployeeRepositoryService implements EmployeeRepository {

    private apiUrl = 'https://api.example.com/employees';  

    constructor(private http: HttpClient) {}
  
    getEmployees(): Observable<Employee[]> {
      return this.http.get<EmployeeDto[]>(this.apiUrl).pipe(
        map((employeeDTOs) => employeeDTOs.map(EmployeeMapper.toDomain))  
      );
    }
  
    getEmployeeById(id: string): Observable<Employee> {
      return this.http.get<EmployeeDto>(`${this.apiUrl}/${id}`).pipe( 
        map(EmployeeMapper.toDomain)
      );
    }
}
