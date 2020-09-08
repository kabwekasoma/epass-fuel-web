import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelCompaniesComponent } from './fuel-companies.component';

describe('FuelCompaniesComponent', () => {
  let component: FuelCompaniesComponent;
  let fixture: ComponentFixture<FuelCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelCompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
