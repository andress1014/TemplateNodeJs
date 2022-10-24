const { app } = require("../app.js");
const request = require("supertest");
const { randomStr } = require("../helpers/randomGenerate");

describe("GET /api/v1/user/allUser", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(app).get("/api/v1/user/allUser").send();
    expect(response.statusCode).toBe(200);
  });
});
describe("POST /api/v1/user/addUser", () => {
  test("should respond with a 200 status code and create user", async () => {
    const newUser = {
      email: `${randomStr(5)}@correo.com`,
      name: "Andres garcia Martin",
      password: "1234567",
      document: `${randomStr(10)}`,
      idChanel: 1,
      idRole: 1,
      idContractor: 1,
      phone: "3213232",
    };
    const response = await request(app)
      .post("/api/v1/user/addUser")
      .send(newUser);
    expect(response.statusCode).toBe(200);
  });
});
