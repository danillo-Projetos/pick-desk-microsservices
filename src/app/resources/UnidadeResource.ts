import { Request, Response } from 'express';
import { InputUnidadeDto } from '../dtos/Unidades/InputUnidadeDto';
import { UnidadeDto } from '../dtos/Unidades/UnidadeDto';
import { UnidadeRepositoryImpl } from '../repositories/impl/UnidadeRepositoryImpl';
import { UnidadeServiceImpl } from '../services/impl/UnidadeServiceImpl';
import { UnidadeService } from '../services/UnidadeService';

// const unidadeRepositoryImpl = new UnidadeRepositoryImpl();
// const unidadeServiceImpl = new UnidadeServiceImpl(unidadeRepositoryImpl);

// function criarUnidade(req: Request<unknown, unknown, InputUnidadeDto>, res: Response) {
//   const { descricao } = req.body;
//   if (!descricao) {
//     throw new Error('A descrição é obrigatória!');
//   }
//   unidadeServiceImpl.criarUnidade({ descricao });
//   return res.status(201).send();
// }

// function buscarUnidades(req: Request<unknown, unknown, UnidadeDto>, res: Response) {
//   const unidades = unidadeServiceImpl.buscarUnidades();
//   return res.status(200).json(unidades);
// }

// function buscarUnidadePorNome(req: Request<unknown, unknown, unknown, InputUnidadeDto>,
//   res: Response) {
//   const { descricao } = req.query;
//   const unidade = unidadeServiceImpl.buscarUnidadePorDescricao(descricao);
//   return res.status(200).json(unidade);
// }

class UnidadeResource {
  constructor(private unidadeService: UnidadeService) {}

  criarUnidade(req: Request<unknown, unknown, InputUnidadeDto>, res: Response) {
    const { descricao } = req.body;
    if (!descricao) {
      throw new Error('A descrição é obrigatória!');
    }
    this.unidadeService.criarUnidade({ descricao });
    return res.status(201).send();
  }

  buscarUnidades(_, res: Response) {
    const unidades = this.unidadeService.buscarUnidades();
    return res.status(200).json(unidades);
  }

  buscarUnidadePorNome(req: Request<unknown, unknown, unknown, InputUnidadeDto>,
    res: Response) {
    const { descricao } = req.query;
    const unidade = this.unidadeService.buscarUnidadePorDescricao(descricao);
    return res.status(200).json(unidade);
  }
}

export { UnidadeResource };
