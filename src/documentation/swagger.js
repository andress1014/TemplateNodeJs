const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//Metadata info about the API
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Documentacion de mi API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
        },
      },
      userSchemas: {
        addUser: {
          type: "object",
          required: [
            "email",
            "name",
            "password",
            "document",
            "idChanel",
            "idRole",
            "idContractor",
            "phone",
          ],
          properties: {
            email: {
              type: "string",
              format: "email",
            },
            name: {
              type: "string",
              example: "Juan Perez",
            },
            password: {
              type: "string",
              example: "123456",
            },
            document: {
              type: "string",
              example: "123456789",
            },
            idChanel: {
              type: "integer",
              example: 1,
            },
            idRole: {
              type: "integer",
              example: 1,
            },
            idContractor: {
              type: "integer",
              example: 1,
            },
            phone: {
              type: "string",
              example: "123456789",
            },
          },
        },
        allUser: {
          type: "object",
          properties: {
            status: {
              type: "string",
              example: 200,
            },
            message: {
              type: "string",
              example: "Success",
            },
            data: {
              type: "array",
              example: [
                {
                  idUser: 1,
                  email: "andres@vanti.com",
                  name: "Andres garcia Martin",
                  document: "123123423",
                  idChanel: 1,
                  idRole: 1,
                  idContractor: 1,
                  phone: "123232423",
                  status: true,
                  createdAt: "2022-10-21T22:30:37.000Z",
                  updatedAt: "2022-10-21T22:30:37.000Z",
                },
              ],
            },
          },
        },
        updateUser: {
            type: "object",
            required: [
              "email",
              "name",
              "password",
              "document",
              "idChanel",
              "idRole",
              "idContractor",
              "phone",
            ],
            properties: {
              email: {
                type: "string",
                format: "email",
              },
              name: {
                type: "string",
                example: "Juan Perez",
              },
              password: {
                type: "string",
                example: "123456",
              },
              document: {
                type: "string",
                example: "123456789",
              },
              idChanel: {
                type: "integer",
                example: 1,
              },
              idRole: {
                type: "integer",
                example: 1,
              },
              idContractor: {
                type: "integer",
                example: 1,
              },
              phone: {
                type: "string",
                example: "123456789",
              },
            },
          },
      },
    },
  },

  apis: ["src/documentation/documentation.js", "src/database/connection.js"],
};

const swaggerSpec = swaggerJSDoc(options);

//Function to generate the swagger.json file
const swaggerDocs = (app, port) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get("docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  console.log(`Swagger UI is available at http://localhost:${port}/docs`);
};

module.exports = { swaggerDocs };
