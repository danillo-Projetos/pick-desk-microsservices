import { InputUnidadeDto } from '../dtos/Unidades/InputUnidadeDto';
import { UnidadeDto } from '../dtos/Unidades/UnidadeDto';
import { Unidade } from '../entities/Unidade';

interface UnidadeRepository {
  findAll: () => Promise<Array<UnidadeDto>>;
  findByName: (nomeUnidade: string) => Promise<UnidadeDto>;
  create: (inputUnidadeDto: InputUnidadeDto) => void;
}

export { UnidadeRepository };
