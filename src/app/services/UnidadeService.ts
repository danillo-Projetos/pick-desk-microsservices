import { InputUnidadeDto } from '../dtos/Unidades/InputUnidadeDto';
import { UnidadeDto } from '../dtos/Unidades/UnidadeDto';

interface UnidadeService {
  criarUnidade: (inputUnidadeDto: InputUnidadeDto) => void,
  buscarUnidades: () => Promise<Array<UnidadeDto>>,
  buscarUnidadePorDescricao: (descricao: string) => Promise<UnidadeDto>
}

export { UnidadeService };
