import { HttpClient } from "@angular/common/http"; 
import { map, Observable } from "rxjs";
import { Employee } from "../../core/domain/models/employee";
import { EmployeeDto } from "../dtos/employee-dto";
import { EmployeeMapper } from "../mappers/employee-mapper";
import { Injectable } from "@angular/core";
import { apiConfig } from "../api/api-config";
import { IEmployeeRepository } from "../../core/domain/repositories/i-employee-repository";

@Injectable({
  providedIn: 'root',
})
export class EmployeeRepositoryService implements IEmployeeRepository {


  constructor(private http: HttpClient) { }

  createEmployee(employee: Employee): Observable<Employee> { 
    const employeeDto = EmployeeMapper.toDTO(employee);
    return this.http.post<EmployeeDto>(apiConfig.employees.endpoints.createEmployee.url, employeeDto).pipe(
      map(EmployeeMapper.toDomain)
    );
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<EmployeeDto[]>(apiConfig.employees.endpoints.getEmployees.url).pipe(
      map((employeeDTOs) => employeeDTOs.map(EmployeeMapper.toDomain))
    );
  }

  getEmployeeById(id: string): Observable<Employee> {
    return this.http.get<EmployeeDto>(`${apiConfig.employees.url}${apiConfig.employees.endpoints.getEmployeeById}`).pipe(
      map(EmployeeMapper.toDomain)
    );
  }
}
