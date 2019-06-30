import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqVidComponent } from './req-vid.component';

describe('ReqVidComponent', () => {
  let component: ReqVidComponent;
  let fixture: ComponentFixture<ReqVidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqVidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqVidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
