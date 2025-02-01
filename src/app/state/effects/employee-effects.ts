import { Injectable } from "@angular/core";
import { map, mergeMap } from "rxjs";
import { getEmployeesSuccess, getEmployees } from "../actions/employee.actions";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EmployeeService } from "../../core/services/employee.service"; // Corregir ruta del servicio

@Injectable()
export class EmployeeEffects {
    constructor(
        private actions$: Actions,
        private employeeService: EmployeeService
    ) {}

    loadEmployees$ = createEffect(() => this.actions$.pipe(
        ofType(getEmployees),
        mergeMap(() => 
            this.employeeService.getAllEmployees().pipe(
            map(employees => getEmployeesSuccess({ employees }))
        ))
    ));
}
