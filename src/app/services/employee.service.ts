import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private API_SERVER = "https://verbose-orbit-wrgwqgw64799hpw4-8080.app.github.dev/api/employee/all";
  
  constructor(
    private http: HttpClient
  ) { }

  public getAllEmployees(): Observable<any> {
    return this.http.get(this.API_SERVER);
  }
}
