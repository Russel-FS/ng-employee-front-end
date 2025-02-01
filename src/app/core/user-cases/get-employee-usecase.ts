import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "../models/employee.model";
import { EmployeeService } from "../services/employee.service";

@Injectable({
  providedIn: 'root'
})
export class GetEmployeeUsecase {
  constructor(private employeeService: EmployeeService) { }

  execute(): Observable<Employee[]> {
    return this.employeeService.getAllEmployees();
  }

}
