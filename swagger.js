const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task Manager API',
      version: '1.0.0',
      description: 'A simple Node.js + MongoDB API for managing tasks',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        Task: {
          type: 'object',
          required: ['title'],
          properties: {
            _id: {
              type: 'string',
              description: 'Auto-generated MongoDB ObjectId',
              example: '64a1b2c3d4e5f6789012345a'
            },
            title: {
              type: 'string',
              description: 'Task title',
              example: 'Complete project documentation'
            },
            description: {
              type: 'string',
              description: 'Task description',
              example: 'Write comprehensive API documentation'
            },
            status: {
              type: 'string',
              enum: ['pending', 'completed'],
              default: 'pending',
              description: 'Task status',
              example: 'pending'
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Task creation timestamp',
              example: '2023-07-01T10:30:00.000Z'
            }
          }
        },
        TaskInput: {
          type: 'object',
          required: ['title'],
          properties: {
            title: {
              type: 'string',
              description: 'Task title',
              example: 'Complete project documentation'
            },
            description: {
              type: 'string',
              description: 'Task description',
              example: 'Write comprehensive API documentation'
            },
            status: {
              type: 'string',
              enum: ['pending', 'completed'],
              default: 'pending',
              description: 'Task status',
              example: 'pending'
            }
          }
        },
        Error: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              description: 'Error message',
              example: 'Task not found'
            }
          }
        }
      }
    }
  },
  apis: ['./routes/*.js'], // Path to the API files
};

const specs = swaggerJSDoc(options);

module.exports = { specs, swaggerUi };