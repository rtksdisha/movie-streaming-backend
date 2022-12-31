const request = require("supertest");

const { app, server } = require("../src/index");
jest.setTimeout(60000);

afterAll(() => {
  server.close();
});

describe("when calling GET /movies endpoint", () => {
  it("sholud return a 200 status code", async () => {
    const response = await request(app).get("/movies");

    expect(response.status).toBe(200);
  });

  it("should return an array of movies", async () => {
    const response = await request(app).get("/movies");

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          genre: expect.any(String),
          releaseDate: expect.any(Number),
        }),
      ])
    );
  });
});

describe("when calling POST /movies endpoint", () => {
  it("should return a 201 status code when a movie is created", async () => {
    const response = await request(app).post("/movies").send({
      name: "Disha's sample Biography",
      synopsis: "A great Ninja",
      movieUrl: "",
      releaseDate: 1999,
    });

    expect(response.status).toBe(201);
  });
});
