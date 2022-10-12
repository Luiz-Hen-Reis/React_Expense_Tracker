export interface Item {
    date: Date;
    title: string;
    value: number;
    category: string;
}

export interface Category {
    [tag: string]: {
        expense: boolean;
        color: string;
        title: string
    }
}