import { InputUnidadeDto } from '../dtos/Unidades/InputUnidadeDto';
import { UnidadeDto } from '../dtos/Unidades/UnidadeDto';

interface UnidadeService {
  createUnidade: (inputUnidadeDto: InputUnidadeDto) => void,
  findAllUnidades: () => Promise<Array<UnidadeDto>>
}

export { UnidadeService };
