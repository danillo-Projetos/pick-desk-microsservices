import { InputUnidadeDto } from '../../dtos/Unidades/InputUnidadeDto';
import { UnidadeRepository } from '../../repositories/UnidadeRepository';
import { UnidadeService } from '../UnidadeService';

class UnidadeServiceImpl implements UnidadeService {
  constructor(private unidadeRepository: UnidadeRepository) {}

  createUnidade({ descricao }: InputUnidadeDto) {
    const isUnidadeExistente = !!this.unidadeRepository.findByName(descricao);
    if (isUnidadeExistente) {
      throw new Error('Já existe uma unidade com esse nome');
    }

    this.unidadeRepository.create({ descricao });
  }
  async findAllUnidades() {
    try {
      return await this.unidadeRepository.findAll();
    } catch (erro) {
      throw new Error(`Houve erro ao buscar unidades: ${erro.stack}`);
    }
  }
}

export { UnidadeServiceImpl };
