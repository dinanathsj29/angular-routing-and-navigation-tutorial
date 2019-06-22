import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentContactComponent } from './department-contact.component';

describe('DepartmentContactComponent', () => {
  let component: DepartmentContactComponent;
  let fixture: ComponentFixture<DepartmentContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
