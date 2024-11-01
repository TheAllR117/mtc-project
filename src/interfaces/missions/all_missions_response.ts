export interface AllMissionsResponse {
    data?: AllMissions;
}

export interface AllMissions {
    missions?: Mission[];
}

export interface Mission {
    title?: string;
    text?:  Text;
    img?:   Img;
}

export interface Img {
    url?: string;
}

export interface Text {
    markdown?: string;
}