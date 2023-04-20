export interface Today {
    title: string;
    heading: string;
    description: string;
    items: Item [];
}

export interface Item {
    id: number;
    image_url: string;
}
