import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Employee } from '../../../../core/models/employee.model';
import { Observable } from 'rxjs';
import { AppState } from '../../../../core/store/app.state';
import { getEmployees } from '../../../../state/actions/employee.actions';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees$!: Observable<Employee[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(getEmployees());
    this.employees$ = this.store.select(state => state.employees.employees);
  }
}
