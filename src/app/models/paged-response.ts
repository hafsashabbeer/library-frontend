export interface PagedResponse<T>{
    content: T[];
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    empty: boolean;
    first: boolean;
    last: boolean;
    numberOfElements: number;
}