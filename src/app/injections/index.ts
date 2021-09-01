import { container } from 'tsyringe';
import { UnidadeRepositoryImpl } from '../repositories/impl/UnidadeRepositoryImpl';
import { UnidadeRepository } from '../repositories/UnidadeRepository';
import { UnidadeServiceImpl } from '../services/impl/UnidadeServiceImpl';

container.registerSingleton<UnidadeRepository>(
  'UnidadeRepository',
  UnidadeRepositoryImpl,
);

function criarUnidadeService() {
  return container.resolve(UnidadeServiceImpl);
}

export { criarUnidadeService };
