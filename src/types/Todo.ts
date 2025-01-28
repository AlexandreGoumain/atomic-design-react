export interface Todo {
    id: number;
    title: string;
    status?: Status;
}

export interface Status {
    value: number;
    label: string;
}
