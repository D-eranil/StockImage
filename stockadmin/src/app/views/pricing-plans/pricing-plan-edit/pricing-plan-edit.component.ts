import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PricingPlanService } from '../services/pricing-plan.service';
import { PricingPlan } from '../pricing-plan-list/models/pricing-plan.model';

@Component({
  selector: 'app-pricing-plan-edit',
  templateUrl: './pricing-plan-edit.component.html',
  styleUrls: ['./pricing-plan-edit.component.scss']
})
export class PricingPlanEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private pricingPlanService: PricingPlanService) { } 
  pricingForm: FormGroup;
  plan_id: number;
  pricingPlanResponse: PricingPlan;

  ngOnInit(): void {
    this.plan_id = Number(this.route.snapshot.paramMap.get('plan_id'));
    this.getPricingPlanById(this.plan_id);
 
    this.pricingForm = new FormGroup({
      subtitle: new FormControl('', [
        Validators.minLength(10),
        Validators.maxLength(25)
      ]),  
      short_description: new FormControl('', [
        Validators.minLength(20),
        Validators.maxLength(40)
      ]),  
      is_selected: new FormControl(''),  
      price: new FormControl(''),  
      price_for: new FormControl('')
    })
  }

  getPricingPlanById(plan_id: number) {
    this.pricingPlanService.getPricingPlanById(this.plan_id)
    .subscribe(
      (response: PricingPlan) => {  
      this.pricingPlanResponse = response;  
      this.pricingForm.patchValue({
        price: this.pricingPlanResponse.price,
        subtitle: this.pricingPlanResponse.subtitle,
        price_for: this.pricingPlanResponse.price_for,
        is_selected: this.pricingPlanResponse.is_selected,
        short_description: this.pricingPlanResponse.short_description,
      });
      },                      
      (err) => {  
      console.log(err); 
      } 
      );
  }

}
