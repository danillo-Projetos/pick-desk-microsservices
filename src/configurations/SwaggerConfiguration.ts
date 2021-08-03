import swaggerUI from 'swagger-ui-express';
import swaggerFile from './swaggerFile.json';

const swaggerServe = swaggerUI.serve;
const swaggerSetup = swaggerUI.setup(swaggerFile);

export { swaggerServe, swaggerSetup };
