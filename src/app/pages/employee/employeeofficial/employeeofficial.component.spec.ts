import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeofficialComponent } from './employeeofficial.component';

describe('EmployeeofficialComponent', () => {
  let component: EmployeeofficialComponent;
  let fixture: ComponentFixture<EmployeeofficialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeofficialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeofficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
