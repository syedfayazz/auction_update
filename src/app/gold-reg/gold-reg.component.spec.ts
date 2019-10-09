import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldRegComponent } from './gold-reg.component';

describe('GoldRegComponent', () => {
  let component: GoldRegComponent;
  let fixture: ComponentFixture<GoldRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
