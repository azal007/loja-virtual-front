export interface Usuario {
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    email: string;
    senha: string;
    habilitarNotificacoesPromocoes: boolean;
    ativo: boolean;
}