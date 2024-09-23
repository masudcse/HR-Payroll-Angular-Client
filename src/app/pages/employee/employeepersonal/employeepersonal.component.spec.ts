import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeepersonalComponent } from './employeepersonal.component';

describe('EmployeepersonalComponent', () => {
  let component: EmployeepersonalComponent;
  let fixture: ComponentFixture<EmployeepersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeepersonalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeepersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
