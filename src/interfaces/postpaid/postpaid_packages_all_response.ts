export interface PostPaidAllResponse {
    data?: PostPaidAll;
}

export interface PostPaidAll {
    postpaidPlans?: PostpaidPlan[];
}

export interface PostpaidPlan {
    numberStamps?:      number;
    priceStampPackage?: number;
}