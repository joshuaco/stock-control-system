import swaggerJSDoc from 'swagger-jsdoc';
import { SwaggerUiOptions } from 'swagger-ui-express';

const options: swaggerJSDoc.Options = {
  swaggerDefinition: {
    openapi: '3.0.3',
    info: {
      title: 'Stock Control System API',
      version: '1.0.0',
      description: 'This is the API for the Stock Control System application.',
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT'
      }
    },
    tags: [
      {
        name: 'Products',
        description: 'API operations related to products'
      }
    ]
  },
  apis: ['./src/routes/*.ts', './src/docs/*.swagger.ts']
};

const swaggerSpec = swaggerJSDoc(options);

export const swaggerUIoptions: SwaggerUiOptions = {
  customSiteTitle: 'Stock Control System API Docs'
};

export default swaggerSpec;
