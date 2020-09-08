import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelAttendantsComponent } from './fuel-attendants.component';

describe('FuelAttendantsComponent', () => {
  let component: FuelAttendantsComponent;
  let fixture: ComponentFixture<FuelAttendantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelAttendantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelAttendantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
