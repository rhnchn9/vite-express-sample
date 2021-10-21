export interface IBlog {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface IBlogParams {
    _page: string;
    _limit: string;
    [key: string]: string;
}
