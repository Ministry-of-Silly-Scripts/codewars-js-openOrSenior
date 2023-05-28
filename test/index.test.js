const { openOrSenior } = require("../src/index");

test("test openOrSenior", () => {
  expect(openOrSenior(0)).toBe(true);
});
