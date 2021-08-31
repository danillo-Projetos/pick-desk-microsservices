import { InputUnidadeDto } from '../../dtos/Unidades/InputUnidadeDto';
import { UnidadeRepository } from '../../repositories/UnidadeRepository';
import { UnidadeService } from '../UnidadeService';

class UnidadeServiceImpl implements UnidadeService {
  constructor(private unidadeRepository: UnidadeRepository) {}

  criarUnidade({ descricao }: InputUnidadeDto) {
    const isUnidadeExistente = !!(this.unidadeRepository.findByName(descricao));
    if (isUnidadeExistente) {
      throw new Error('Já existe uma unidade com esse nome');
    }
    this.unidadeRepository.create({ descricao });
  }

  buscarUnidades() {
    return this.unidadeRepository.findAll();
  }

  buscarUnidadePorDescricao(descricao: string) {
    return this.unidadeRepository.findByName(descricao);
  }
}

export { UnidadeServiceImpl };
