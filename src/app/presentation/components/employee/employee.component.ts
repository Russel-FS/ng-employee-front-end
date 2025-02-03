import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../core/domain/models/employee';
import { CommonModule } from '@angular/common';
import { GetEmployeesUseCase } from '../../../core/domain/use-cases/get-employees-use-case';
import { DeleteEmployeeUseCase } from '../../../core/domain/use-cases/delete-employee-use-case';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  standalone: true,
  imports: [CommonModule],
  providers: [GetEmployeesUseCase]
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];
  isLoading = false;
  error: string | null = null;

  constructor(
    private getEmployeesUseCase: GetEmployeesUseCase,
    private deleteEmployeeUseCase: DeleteEmployeeUseCase
  ) { }

  async ngOnInit() {
    await this.loadEmployees();
  }

  async loadEmployees() {
    this.isLoading = true;
    this.error = null;

    this.getEmployeesUseCase.execute().subscribe({
      next: (employees) => {
        this.employees = employees;
      },
      error: (error) => {
        this.error = 'Error al cargar los empleados';
        console.error('Error fetching employees:', error);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  deleteEmployee(id: number | null) {
    if (confirm('¿Estás seguro de que deseas eliminar este empleado?')) {
      this.deleteEmployeeUseCase.execute(id).subscribe({
        next: () => {
          this.employees = this.employees.filter((employee) => employee.id !== id);
        },
        error: (error) => {
          console.error('Error deleting employee:', error);
        }
      });
    }
  }
}
