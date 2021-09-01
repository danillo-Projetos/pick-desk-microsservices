import HttpStatus, { getReasonPhrase } from 'http-status-codes';
import { inject, injectable } from 'tsyringe';
import { InputUnidadeDto } from '../../dtos/Unidades/InputUnidadeDto';
import { UnidadeDto } from '../../dtos/Unidades/UnidadeDto';
import { AppError } from '../../handlers/exceptions/AppError';
import { UnidadeRepository } from '../../repositories/UnidadeRepository';
import { UnidadeService } from '../UnidadeService';

@injectable()
class UnidadeServiceImpl implements UnidadeService {
  constructor(
    @inject('UnidadeRepository')
    private unidadeRepository: UnidadeRepository,
  ) {}

  async buscarUnidades(): Promise<Array<UnidadeDto>> {
    const unidades = await this.unidadeRepository.findAll();

    return unidades.map(({ id, descricao }) => ({
      id,
      descricao,
    }));
  }

  async buscarUnidadePorDescricao(descricao: string): Promise<UnidadeDto> {
    const unidade = await this.unidadeRepository.findByName(descricao);
    return {
      id: unidade.id,
      descricao: unidade.descricao,
    };
  }

  async criarUnidade({ descricao }: InputUnidadeDto): Promise<void> {
    const isUnidadeExistente = !!(await this.buscarUnidadePorDescricao(descricao));
    if (isUnidadeExistente) {
      throw new AppError(
        'Já existe uma unidade com essa descrição!',
        getReasonPhrase(HttpStatus.BAD_REQUEST),
        HttpStatus.BAD_REQUEST,
      );
    } else {
      await this.unidadeRepository.create({ descricao });
    }
  }
}

export { UnidadeServiceImpl };
