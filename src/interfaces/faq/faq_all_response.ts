export interface FAQAllCfdiResponse {
    data?: FAQAllCfdi;
}

export interface FAQAllCfdi {
    faqs?: FAQ[];
}

export interface FAQ {
    title?: string;
    text?: Text; // Cambia de string a Text
    id?: string;
}

export interface Text {
    html?: string;
    markdown?: string;
    raw?: Raw;
    text?: string;
}

export interface Raw {
    children?: RawChild[];
}

export interface RawChild {
    type?: string;
    children?: ChildChild[];
}

export interface ChildChild {
    text?: string;
}