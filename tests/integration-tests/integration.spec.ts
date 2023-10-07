import "jest";
import app from "../../src/index";
import request from "supertest";

describe('Integration Tests', () => {
    it('should return "Hello World!" from /', async () => {
      const response = await request(app).get("/");
      expect(response.status).toBe(200);
      expect(response.body.message).toBe("Hello world!");
    });
  });