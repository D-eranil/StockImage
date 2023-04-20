import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingPlanListComponent } from './pricing-plan-list.component';

describe('PricingPlanListComponent', () => {
  let component: PricingPlanListComponent;
  let fixture: ComponentFixture<PricingPlanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingPlanListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
