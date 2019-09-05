const app = require("../app");
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const request = require("supertest");
require("../src/utils/db");

describe("sample tests", () => {
  let connection;
  let db;

  beforeAll(async () => {
    const dbParams = global.__MONGO_URI__.split("/");
    const dbName = dbParams[dbParams.length - 1];
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true
    });
    db = await connection.db(dbName);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await connection.close();
    await db.close();
  });

  beforeEach(async () => {
    await db.dropDatabase();
  });

  describe("sample test", () => {
    it("should equal true", async () => {
      // const sample = db.collection("apartments");
      // await sample.insertMany([1,2,3]);

      // const response = await request(app).get("/apartments");

      // expect(response.status).toBe(200);
      // expect(response.body).toBe(true);
      expect(true).toBe(true);
    });
  });
});
