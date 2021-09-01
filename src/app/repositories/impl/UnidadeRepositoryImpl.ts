import HttpStatus, { getReasonPhrase } from 'http-status-codes';
import { getRepository, Repository } from 'typeorm';
import { InputUnidadeDto } from '../../dtos/Unidades/InputUnidadeDto';
import { Unidade } from '../../entities/Unidade';
import { AppError } from '../../handlers/exceptions/AppError';
import { UnidadeRepository } from '../UnidadeRepository';

class UnidadeRepositoryImpl implements UnidadeRepository {
  private repository: Repository<Unidade>;

  constructor() {
    this.repository = getRepository<Unidade>(Unidade);
  }

  public async findAll(): Promise<Array<Unidade>> {
    try {
      return await this.repository.find();
    } catch (erro) {
      throw new AppError(
        'Erro ao buscar as unidades!',
        getReasonPhrase(HttpStatus.INTERNAL_SERVER_ERROR),
        HttpStatus.INTERNAL_SERVER_ERROR,
        erro,
      );
    }
  }

  public async findByName(nomeUnidade: string): Promise<Unidade> {
    try {
      return await this.repository.findOne({
        where: { descricao: nomeUnidade },
      });
    } catch (erro) {
      throw new AppError(
        'Erro ao tentar buscar uma unidade pela descrição forncecida!',
        getReasonPhrase(HttpStatus.INTERNAL_SERVER_ERROR),
        HttpStatus.INTERNAL_SERVER_ERROR,
        erro,
      );
    }
  }

  public async create({ descricao }: InputUnidadeDto): Promise<Unidade> {
    const unidade = this.repository.create({ descricao });
    try {
      return await this.repository.save(unidade);
    } catch (erro) {
      throw new AppError(
        'Erro ao criar a unidade!',
        getReasonPhrase(HttpStatus.INTERNAL_SERVER_ERROR),
        HttpStatus.INTERNAL_SERVER_ERROR,
        erro,
      );
    }
  }
}

export { UnidadeRepositoryImpl };
