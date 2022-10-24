const { app } = require("../app.js");
const request = require("supertest");
const { randomStr } = require("../helpers/randomGenerate");

describe("GET /api/v1/client/allClient", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(app).get("/api/v1/client/allClient").send();
    expect(response.statusCode).toBe(200);
  });
});
describe("POST /api/v1/client/addClient", () => {
  test("should respond with a 200 status code and create user", async () => {
    const newUser = {
      numberContract: `${randomStr(10)}`,
      name: "Juana Salcedo",
      typeDocument: "C.C",
      document: `${randomStr(10)}`,
      birthDate: "1990/02/02",
      gender: "Mujer",
      phone: "21321321",
      email: "juana@gmail.com",
      suscribe: "2022/02/03",
      unsuscribe: null,
      idChanel: 1,
      idUser: 1,
      nameProduct: "Seguro",
      category: "funerario",
    };
    const response = await request(app)
      .post("/api/v1/client/addClient")
      .send(newUser);
    expect(response.statusCode).toBe(200);
  });
});
