export interface PrePaidAllResponse {
    data?: PrePaidAll;
}

export interface PrePaidAll {
    prepaidPackages?: PrepaidPackage[];
}

export interface PrepaidPackage {
    numberStamps?:      number;
    priceStampPackage?: number;
}
