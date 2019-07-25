import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCouncilComponent } from './login-council.component';

describe('LoginCouncilComponent', () => {
  let component: LoginCouncilComponent;
  let fixture: ComponentFixture<LoginCouncilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCouncilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCouncilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
