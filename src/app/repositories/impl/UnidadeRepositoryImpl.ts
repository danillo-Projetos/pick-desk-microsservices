import { getRepository, Repository } from 'typeorm';
import { InputUnidadeDto } from '../../dtos/Unidades/InputUnidadeDto';
import { UnidadeDto } from '../../dtos/Unidades/UnidadeDto';
import { Unidade } from '../../entities/Unidade';
import { UnidadeRepository } from '../UnidadeRepository';

class UnidadeRepositoryImpl implements UnidadeRepository {
  private repository: Repository<Unidade>;

  private constructor() {
    this.repository = getRepository(Unidade);
  }

  public async create({ descricao }: InputUnidadeDto) {
    const unidade = this.repository.create({ descricao });
    await this.repository.save(unidade);
  }

  public async findAll() {
    const unidades = await this.repository.find();
    const listaUnidadeDto: Array<UnidadeDto> = unidades.map(({ id, descricao }) => ({
      id,
      descricao,
    }));
    return listaUnidadeDto;
  }

  public async findByName(nomeUnidade: string): Promise<UnidadeDto> {
    const { id, descricao } = await this.repository.findOne({ where: { descricao: nomeUnidade } });
    if (!nomeUnidade || !id) {
      return null;
    }
    return { id, descricao };
  }
}

export { UnidadeRepositoryImpl };
