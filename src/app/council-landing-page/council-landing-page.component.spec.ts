import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncilLandingPageComponent } from './council-landing-page.component';

describe('CouncilLandingPageComponent', () => {
  let component: CouncilLandingPageComponent;
  let fixture: ComponentFixture<CouncilLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouncilLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouncilLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
