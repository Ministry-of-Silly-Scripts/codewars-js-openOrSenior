const { openOrSenior } = require("../src/index");

describe("openOrSenior", () => {
  test("it should return an empty list if the input is an empyt list", () => {
    expect(openOrSenior([])).toStrictEqual([]);
  });

  test("it should receive a list with the pair [18, 20] as input and return a list with ['Open'] as output", () => {
    expect(openOrSenior([[18, 20]])).toStrictEqual(["Open"]);
  });

  // test("it should return ['Senior'] for the input [55, 7] since first element is greater then 55", () => {
  //   expect(openOrSenior([[55, 7]])).toStrictEqual(["Senior"]);
  // });

  // test("it should return ['Open'] for the input [54, 7] since first element is lower then 55", () => {
  //   expect(openOrSenior([[55, 7]])).toStrictEqual(["Senior"]);
  // });

  test("it should return ['Senior'] for the input [55, 8] since first element is greater then 55 and the second higher than 7", () => {
    expect(openOrSenior([[55, 8]])).toStrictEqual(["Senior"]);
  });

  test("it should return ['Open'] for the input [55, 6] since first element is greater then 55 and the second lower than 7", () => {
    expect(openOrSenior([[55, 7]])).toStrictEqual(["Open"]);
  });

  test("it should return ['Open', 'Open', 'Senior', 'Open', 'Open', 'Senior'] for the input [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]", () => {
    expect(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])).toStrictEqual(['Open', 'Open', 'Senior', 'Open', 'Open', 'Senior']);
  });
});
