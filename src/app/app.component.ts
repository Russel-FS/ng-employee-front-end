import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'laundry-a';
  employeeForm!: FormGroup;
  employees: any;

  constructor(
    public fb: FormBuilder,
    public employeeService: EmployeeService
  ) {

  }
  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
    });

    this.employeeService.getAllEmployees().subscribe((data: any) => {
      this.employees = data;
      console.log(data);
    }),
    (error: any) => {
      console.error(error);
    }
    

  }

  onSubmit() {
    if (this.employeeForm.valid) {
      console.log(this.employeeForm.value);
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.employeeForm.value));
    } 
  }

}
