import { Router } from 'express';
import { UnidadeRepositoryImpl } from '../app/repositories/impl/UnidadeRepositoryImpl';
import { UnidadeResource } from '../app/resources/UnidadeResource';
import { UnidadeServiceImpl } from '../app/services/impl/UnidadeServiceImpl';

const unidadeRouter = Router();
const unidadeRepositoryImpl = new UnidadeRepositoryImpl();
const unidadeServiceImpl = new UnidadeServiceImpl(unidadeRepositoryImpl);
const unidadeResource = new UnidadeResource(unidadeServiceImpl);

unidadeRouter.get('/', unidadeResource.buscarUnidades);
unidadeRouter.get('/:descricao', unidadeResource.buscarUnidadePorNome);

export { unidadeRouter };
