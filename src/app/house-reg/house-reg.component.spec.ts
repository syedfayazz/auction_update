import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseRegComponent } from './house-reg.component';

describe('HouseRegComponent', () => {
  let component: HouseRegComponent;
  let fixture: ComponentFixture<HouseRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
