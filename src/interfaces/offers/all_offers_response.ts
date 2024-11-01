export interface AllOffersResponse {
    data?: AllOffers;
}

export interface AllOffers {
    offers?: Offer[];
}

export interface Offer {
    text?:  Text;
    title?: string;
    img?:   Img;
}

export interface Img {
    url?: string;
}

export interface Text {
    markdown?: string;
}
