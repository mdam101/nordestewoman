export interface Usuario {
    id: String;
    email: String;
    password: String;
    rol: String;
}

export enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER'
}
