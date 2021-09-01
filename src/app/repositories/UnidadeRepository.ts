import { InputUnidadeDto } from '../dtos/Unidades/InputUnidadeDto';
import { Unidade } from '../entities/Unidade';

interface UnidadeRepository {
  findAll: () => Promise<Array<Unidade>>;
  findByName: (nomeUnidade: string) => Promise<Unidade>;
  create: (inputUnidadeDto: InputUnidadeDto) => Promise<Unidade>;
}

export { UnidadeRepository };
