const { openOrSenior } = require("../src/index");

describe("openOrSenior", () => {
  test("it should return an empty list if the input is an empyt list", () => {
    expect(openOrSenior([])).toStrictEqual([]);
  });

  test("is should receive a list with the pair [18, 20] as input and return a list with ['Open'] as output", () => {
    expect(openOrSenior([[18, 20]])).toStrictEqual(["Open"]);
  });

  test("is should return ['Senior'] for the input [55, 7] since first element is greater then 55", () => {
    expect(openOrSenior([[55, 7]])).toStrictEqual(["Senior"]);
  });

  test("is should return ['Open'] for the input [54, 7] since first element is lower then 55", () => {
    expect(openOrSenior([[55, 7]])).toStrictEqual(["Senior"]);
  });
});
