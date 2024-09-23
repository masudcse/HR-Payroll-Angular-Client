import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SetupComponent } from './pages/setup/setup.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { EmployeepersonalComponent } from './pages/employee/employeepersonal/employeepersonal.component';
import { EmployeeofficialComponent } from './pages/employee/employeeofficial/employeeofficial.component';
import { LeaveComponent } from './pages/leave/leave.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { PayrollComponent } from './pages/payroll/payroll.component';
import { MisreportComponent } from './pages/misreport/misreport.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SetupComponent,
    EmployeeComponent,
    EmployeepersonalComponent,
    EmployeeofficialComponent,
    LeaveComponent,
    AttendanceComponent,
    PayrollComponent,
    MisreportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
