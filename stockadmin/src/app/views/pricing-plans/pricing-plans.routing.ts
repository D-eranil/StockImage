import { Routes } from '@angular/router';
 
// import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component'; 
import { PricingPlanListComponent } from './pricing-plan-list/pricing-plan-list.component';
import { PricingPlanEditComponent } from './pricing-plan-edit/pricing-plan-edit.component';

export const PricingPlanRoutes: Routes = [ 
  {
    path: '',
    children: [
      {
        path: '',
        component: PricingPlanListComponent,
        data: { title: 'pricing plans list', breadcrumb: 'PRICING PLANS LIST' }
      },
      {
        path: 'edit/:plan_id',
        component: PricingPlanEditComponent,
        data: { title: 'pricing plans list', breadcrumb: 'PRICING PLAN EDIT' }
      }
    ]
  }
];