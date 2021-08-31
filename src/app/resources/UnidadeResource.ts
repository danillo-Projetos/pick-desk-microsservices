import { Request, Response } from 'express';
import { InputUnidadeDto } from '../dtos/Unidades/InputUnidadeDto';
import { UnidadeDto } from '../dtos/Unidades/UnidadeDto';
import { UnidadeRepositoryImpl } from '../repositories/impl/UnidadeRepositoryImpl';

const unidadedeRepositoryImpl = new UnidadeRepositoryImpl();

async function criarUnidade(req: Request<unknown, unknown, InputUnidadeDto>, res: Response) {
  const { descricao } = req.body;
  await this.unidadeServiceImpl.create({ descricao });
  return res.status(201).send();
}

async function buscarUnidades(req: Request<unknown, unknown, UnidadeDto>, res: Response) {
  const unidades = await this.unidadeServiceImpl.findAll();
  return res.status(200).json(unidades);
}

async function buscarUnidadePorNome(req: Request<unknown, unknown, unknown, InputUnidadeDto>,
  res: Response) {
  const { descricao } = req.query;
  const unidade = await this.unidadeServiceImpl.findByName(descricao);
  return res.status(200).json(unidade);
}

export { criarUnidade, buscarUnidadePorNome, buscarUnidades };
