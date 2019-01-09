export interface Image {
    href: string;
}
export interface Range {
    high: number;
    low: number;
}
export interface PriceRange {
    regular: Range;
    selling: Range;
    type: string;
}
export interface Product {
    name: string;
    image: string;
    price: number;
    hero: Image;
    images: Image[];
    priceRange: PriceRange;
}
export interface APIResponse {
    groups: Product[];
}
