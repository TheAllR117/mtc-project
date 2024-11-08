export interface PoliticsAllResponse {
    data?: PoliticsAll;
}

export interface PoliticsAll {
    politics?: Politic[];
}

export interface Politic {
    contentPolitics?: ContentPolitics;
}

export interface ContentPolitics {
    markdown?: string;
}
