const swaggerAutogen = require('swagger-autogen')();

const swaggerFile = 'src/configurations/swaggerFile.json';
const endpoints = ['src/routes/users.routes.ts'];
const swaggerOptions = {
  info: {
    version: '1.0.0',
    title: 'Pick Desk API',
    description: 'Esta API contém os microsserviços necessários da aplicação Pick Desk - SIS Consultoria',
    contact: {
      name: 'Danillo Miranda',
      email: 'danillomiranda@sisconsultoria.com.br',
    },
    servers: ['http://localhost:9090'],
  },
};

swaggerAutogen(swaggerFile, endpoints, swaggerOptions);
