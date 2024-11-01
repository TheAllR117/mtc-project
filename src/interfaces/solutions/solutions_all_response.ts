export interface SolutionsAllCfdiResponse {
    data?: SolutionsAllCfdi;
}

export interface SolutionsAllCfdi {
    solution?: Solution[];
}

export interface Solution {
    id?:          string;
    img?:         Img;
    title?:       string;
    text?:        string;
    infoTooltip?: string;
}

export interface Img {
    url?: string;
}
