import app from "../src/app";
import chai from 'chai';
import request from "supertest";
import "mocha";
import { expect } from 'chai';


describe("GET /api", () => {
  it("should return 200 OK", () => {
    return request(app).get("/").expect(200);
  });
});
