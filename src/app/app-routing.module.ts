import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { EmployeepersonalComponent } from './pages/employee/employeepersonal/employeepersonal.component';
import { LeaveComponent } from './pages/leave/leave.component';
import { EmployeeofficialComponent } from './pages/employee/employeeofficial/employeeofficial.component';
import { SetupComponent } from './pages/setup/setup.component';
import { PayrollComponent } from './pages/payroll/payroll.component';
import { MisreportComponent } from './pages/misreport/misreport.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'setup', component: SetupComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'leave', component: LeaveComponent },
  { path: 'employee/employeepersonal', component: EmployeepersonalComponent },
  { path: 'employee/employeeofficial', component: EmployeeofficialComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'payroll', component: PayrollComponent },
  { path: 'misreport', component: MisreportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
