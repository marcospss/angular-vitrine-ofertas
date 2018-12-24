export class Offer {
    public id: number;
    public category: string;
    public categorySlug: string;
    public cover?: string;
    public description: string;
    public folder_files?: string;
    public gallery?: Array<object>;
    public highlight: boolean;
    public link: string;
    public meta_description: string;
    public meta_keywords: string;
    public order_display: number;
    public section_id: number;
    public slug: string;
    public value: number;
    public status: boolean;
    public title: string;
}
