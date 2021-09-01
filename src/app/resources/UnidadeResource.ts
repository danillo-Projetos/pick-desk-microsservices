import HttpStatus, { getReasonPhrase } from 'http-status-codes';
import { Request, Response } from 'express';
import { InputUnidadeDto } from '../dtos/Unidades/InputUnidadeDto';
import { criarUnidadeService } from '../injections';
import { AppError } from '../handlers/exceptions/AppError';
import { ResponseHandler } from '../handlers/responses/ResponseHandler';
import { UnidadeDto } from '../dtos/Unidades/UnidadeDto';

async function criarUnidade(req: Request<unknown, unknown, InputUnidadeDto>, res: Response) {
  const { descricao } = req.body;
  if (!descricao) {
    throw new AppError(
      'A descrição é obrigatória!',
      getReasonPhrase(HttpStatus.BAD_REQUEST),
      HttpStatus.BAD_REQUEST,
    );
  }
  await criarUnidadeService().criarUnidade({ descricao });
  return res.status(HttpStatus.CREATED).send();
}

async function buscarUnidades(_, res: Response<ResponseHandler<Array<UnidadeDto>>>) {
  const unidades = await criarUnidadeService().buscarUnidades();
  return res.status(HttpStatus.OK).json({
    code: getReasonPhrase(HttpStatus.OK),
    statusCode: HttpStatus.OK,
    data: unidades,
  });
}

async function buscarUnidadePorDescricao(req: Request<unknown, unknown, unknown, InputUnidadeDto>,
  res: Response) {
  const { descricao } = req.query;
  const unidade = await criarUnidadeService().buscarUnidadePorDescricao(descricao);
  return res.status(HttpStatus.OK).json({
    code: getReasonPhrase(HttpStatus.OK),
    statusCode: HttpStatus.OK,
    data: unidade,
  });
}

export {
  criarUnidade,
  buscarUnidades,
  buscarUnidadePorDescricao,
};
