import { Endereco } from "./endereco";

export interface Usuario {
        nome: string;
        email: string;
        senha?: string; // opcional
        endereco: Endereco;
    }
