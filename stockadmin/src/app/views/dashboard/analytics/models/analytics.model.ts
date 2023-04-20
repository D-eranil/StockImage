export interface Analytics {
    monthlySalesOfLastTwelveMonths: []
    total_images_count:string;
    images_uploaded_this_week:string;
    this_week_sales:string;
    yesterday_sales:string;  
    trafficSources: trafficSources [];
    mostSoldCategory: mostSoldCategory [];
}

export interface trafficSources {
    name: number;
    value: string;
}

export interface mostSoldCategory { 
        imgUrl: string;
        name: string;
        this_week_sales: number;
        this_week_new_stock: number;
}