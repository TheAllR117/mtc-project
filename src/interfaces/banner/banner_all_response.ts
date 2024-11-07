export interface BannerAllResponse {
    data?: BannerAll;
}

export interface BannerAll {
    banners?: Banner[];
}

export interface Banner {
    imgBanner?:     ImgBanner;
    titleBanner?:   ContentBannerClass;
    contentBanner?: ContentBannerClass;
}

export interface ContentBannerClass {
    markdown?: string;
}

export interface ImgBanner {
    url?: string;
}