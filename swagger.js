//...This is the swagger.js file...

const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        titel: 'Contacts Api',
        description: 'Contacts Api'
    },
    host: 'localhost:3000',
    schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//this will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);