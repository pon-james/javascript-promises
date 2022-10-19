const {
  implementationOne,
  implementationTwo,
  implementationThree,
  implementationFour,
  implementationFive,
  implementationSix,
  implementationSeven,
} = require("./consumers");
const { RESULT } = require("./producers");

const EXPECTED_RESULT = RESULT;

describe.each([
  ['implementationOne', implementationOne ],
  //['implementationTwo', implementationTwo ],
  //["implementationThree", implementationThree],
  // ['implementationFour', implementationFour ],
  // ['implementationFive', implementationFive ],
  // ['implementationSix', implementationSix ],
])("%s", (_, fn) => {

  test("", () => {
    const result = fn();
    expect(result).toEqual(EXPECTED_RESULT);
  });
});
