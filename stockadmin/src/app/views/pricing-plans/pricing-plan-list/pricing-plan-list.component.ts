import { Component, OnInit } from '@angular/core'; 
import { PricingPlanService } from '../services/pricing-plan.service';
import { PricingPlans } from './models/pricing-plan.model';
import { PricingPlan } from './models/pricing-plan.model';
 

@Component({
  selector: 'app-pricing-plan-list',
  templateUrl: './pricing-plan-list.component.html',
  styleUrls: ['./pricing-plan-list.component.scss']
})
export class PricingPlanListComponent implements OnInit {

  constructor(private pricingPlanService: PricingPlanService) { }
  monthlyPricingPlansData: PricingPlan [];
  annualPricingPlansData: PricingPlan []; 
  displayedColumns: string[] = ["price_for", "price", "is_selected", "subtitle","short_description","action"];

  ngOnInit(): void {
    this.getPricingPlans();
  }

  getPricingPlans() {
    this.pricingPlanService.getPricingPlansData()
    .subscribe(
      (response: PricingPlans) => {  
      this.monthlyPricingPlansData = response.monthly_plans; 
      this.annualPricingPlansData = response.annual_plans;  
      },                      
      (err) => {  
      console.log(err); 
      } 
      );
  }

}
