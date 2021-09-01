import { Router } from 'express';
import { buscarUnidadePorDescricao, buscarUnidades, criarUnidade } from '../app/resources/UnidadeResource';

const unidadeRouter = Router();

unidadeRouter.get('/',
  // #swagger.tags = ['Unidades']
  buscarUnidades);

unidadeRouter.get('/?:descricao', (
  // #swagger.tags = ['Unidades']
  buscarUnidadePorDescricao
));

unidadeRouter.post('/', (
  // #swagger.tags = ['Unidades']
  criarUnidade
));

export { unidadeRouter };
