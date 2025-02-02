import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './presentation/features/employee/employee.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  providers: [
    provideHttpClient()
  ],
})
export class AppModule { }