export interface PricingPlans {
        annual_plans: PricingPlan [];
        monthly_plans: PricingPlan [];
}

export interface PricingPlan {
        plan_id: number,
        is_selected: boolean,
        price: string,
        price_for : string,
        subtitle: string,
        short_description: string,
        benefits: Benefit[],
        offer: string
}

export interface Benefit { 
        title: string,
        bold: boolean,
        tooltip: string
}
 