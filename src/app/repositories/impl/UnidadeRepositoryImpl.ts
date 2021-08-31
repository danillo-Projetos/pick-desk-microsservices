import { getRepository, Repository } from 'typeorm';
import { InputUnidadeDto } from '../../dtos/Unidades/InputUnidadeDto';
import { UnidadeDto } from '../../dtos/Unidades/UnidadeDto';
import { Unidade } from '../../entities/Unidade';
import { UnidadeRepository } from '../UnidadeRepository';

class UnidadeRepositoryImpl implements UnidadeRepository {
  private repository: Repository<Unidade>;

  constructor() {
    this.repository = getRepository(Unidade);
  }

  public async create({ descricao }: InputUnidadeDto) {
    const unidade = this.repository.create({ descricao });
    try {
      await this.repository.save(unidade);
    } catch (erro) {
      throw new Error(`Erro ao criar a unidade: ${erro}`);
    }
  }

  public async findAll(): Promise<Array<UnidadeDto>> {
    try {
      const unidades = await this.repository.find();
      return unidades.map(({ id, descricao }) => ({
        id,
        descricao,
      }));
    } catch (erro) {
      throw new Error(`Erro ao buscar as unidades: ${erro}`);
    }
  }

  public async findByName(nomeUnidade: string): Promise<UnidadeDto> {
    try {
      const { id, descricao } = await this.repository.findOne({
        where: { descricao: nomeUnidade },
      });
      if (!id) {
        throw new Error('Não há uma unidade registrada com essa descrição!');
      }
      return { id, descricao };
    } catch (erro) {
      throw new Error(`Erro ao tentar buscar uma unidade pela descrição forncecida: ${erro}`);
    }
  }
}

export { UnidadeRepositoryImpl };
