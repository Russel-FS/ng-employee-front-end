import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from "./presentation/components/employee/employee.component";
import { CreateEmployeeUseCase } from './core/domain/use-cases/create-employee-use-case';
import { Employee } from './core/domain/models/employee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule, EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'laundry-a';
  employeeForm!: FormGroup;
  employees: any;
  activeTab: 'form' | 'list' = 'form';

  constructor(
    public fb: FormBuilder,
    private createEmployeeUseCase: CreateEmployeeUseCase
  ) {

  }
  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {

      const employeeData: Employee = { 
        id: null,
        name: this.employeeForm.get('name')?.value,
        email: this.employeeForm.get('email')?.value
      };

      this.createEmployeeUseCase.execute(employeeData).subscribe({
        next: (response) => {
          console.log('Empleado creado exitosamente', response);
          this.employeeForm.reset();
        },
        error: (error) => {
          console.error('Error al crear empleado', error);
        }
      });
    }
  }

}
