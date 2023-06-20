declare interface IResponse<T> {
    data: T;
    duration: string;
    method: string;
    path: string;
}

interface IPaginationParams {
    limit?: number;
    page: number;
}
type IResponsePagination<T> = {
    data: { rows: T[] };
    pages: number;
    total: number;
} & IPaginationParams;

type Errors = 'Unauthorized';
interface IResponseError {
    name: Errors;
    statusCode: number;
    messages: string[];
    timestamp: string;
    path: string;
}
