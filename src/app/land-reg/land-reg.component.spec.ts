import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandRegComponent } from './land-reg.component';

describe('LandRegComponent', () => {
  let component: LandRegComponent;
  let fixture: ComponentFixture<LandRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
