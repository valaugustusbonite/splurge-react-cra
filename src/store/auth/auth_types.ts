export interface User {
    id: string,
    name: string,
    firstName?:  string,
    lastName?: string,
    value: number,
}

export interface authState {
    readonly loading: boolean;
    readonly data: User;
    readonly erros?: any;
}

export enum AuthActionTypes {
    REGISTER_WITH_NUMBER = 'REGISTER_WITH_NUMBER',
    REGISTER_WITH_GOOGLE = 'REGISTER_WITH_GOOGLE',
}