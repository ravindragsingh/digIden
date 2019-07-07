import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustScoreComponent } from './trust-score.component';

describe('TrustScoreComponent', () => {
  let component: TrustScoreComponent;
  let fixture: ComponentFixture<TrustScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrustScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
