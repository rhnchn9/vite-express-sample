export interface IComment {
    postId: number;
    id: number;
    name: string,
    email: string;
    body: string
}

export interface ICommentParams {
    postId: string;
    [key: string]: string;
}
