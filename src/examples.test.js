const { getDataFromApi } = require("./examples");

describe("getDataFromApi", () => {
  test("should return a promise", () => {
    const result = getDataFromApi();
    expect(result).toBeInstanceOf(Promise);
  });
  test("should return a value", async () => {
    const result = await getDataFromApi();
    expect(result).toEqual({ status: "done" });
  });
  test("should reject if there is an error", async () => {
    expect.assertions(1);
    try {
      const result = await getDataFromApi(false);
    } catch (error) {
      expect(error).toMatch("Yikes, there was an error");
    }
  });
});
