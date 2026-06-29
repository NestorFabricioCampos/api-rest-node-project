import request from "supertest";
import app from "../app.js";

describe("POST /auth/login alias", () => {
  test("debe responder 401 cuando las credenciales son incorrectas", async () => {
    const response = await request(app).post("/auth/login").send({
      email: "mal@email.com",
      password: "123456",
    });

    expect(response.status).toBe(401);
  });
});
