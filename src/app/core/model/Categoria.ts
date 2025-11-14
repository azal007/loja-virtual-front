export interface Categoria {
  id: number;
  nome: string;
  idCategoriaPai: number | null;
}