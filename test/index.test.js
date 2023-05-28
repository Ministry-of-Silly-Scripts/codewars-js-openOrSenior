const { openOrSenior } = require("../src/index");

describe("openOrSenior", () => {
  test("it should return an empty list if the input is an empyt list", () => {
    expect(openOrSenior([])).toStrictEqual([]);
  });

  test("is should receive a list with the pair [18, 20] as input and return a list with ['Open'] as output", () => {
    expect(openOrSenior([[18, 20]])).toStrictEqual(["Open"]);
  });
});
