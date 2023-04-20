import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingPlanEditComponent } from './pricing-plan-edit.component';

describe('PricingPlanEditComponent', () => {
  let component: PricingPlanEditComponent;
  let fixture: ComponentFixture<PricingPlanEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingPlanEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingPlanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
