import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildcardPagenotfoundComponent } from './wildcard-pagenotfound.component';

describe('WildcardPagenotfoundComponent', () => {
  let component: WildcardPagenotfoundComponent;
  let fixture: ComponentFixture<WildcardPagenotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildcardPagenotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildcardPagenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
