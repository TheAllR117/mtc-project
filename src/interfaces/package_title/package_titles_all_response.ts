export interface PackagePlanTitleAllResponse {
    data?: PackagePlanTitleAll;
}

export interface PackagePlanTitleAll {
    packagePlansTitles?: PackagePlansTitle[];
}

export interface PackagePlansTitle {
    titlePlan?:       Plan;
    descriptionPlan?: Plan;
}

export interface Plan {
    markdown?: string;
}