import { UserRole } from "./usuario";

export interface UsuarioStorage {
    id: String;
    email: String;
    token: string;
    rol: Array<UserRole>;
}