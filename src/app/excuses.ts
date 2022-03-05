export interface Categories {
    categories: string[]
}

export interface Excuses {
    id: number,
    excuse: string,
    category: string
}

export interface MyExcuses{
    date_created: string,
    excuse: string,
    excuse_category: string,
    excuse_id: number,
    time_created: string
}

export interface Stats{
    excuse_category: string,
    excuse_id__count: number
}