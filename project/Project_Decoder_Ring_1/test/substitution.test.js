// Write your tests here!

const expect = require("chai").expect;
const substitutionModule = require("../src/substitution");

describe("Substitute like a hot teacher on riverdale", () => {
  it("Should include spaces and special characters.", () => {
    const expected = "message";
    const actual = substitutionModule.substitution(
      "y&ii$r&",
      "$wae&zrdxtfcygvuhbijnokmpl",
      false
    );
    expect(actual).to.eql(expected);
  });

  it("Should maintain spaces throughout", () => {
    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitutionModule.substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    expect(actual).to.eql(expected);
  });

  it("Should ignore capital letter", () => {
    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitutionModule.substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    expect(actual).to.eql(expected);
  });

  it("Should return false if alphabet parameter exceeds 26 characters, including special characters", () => {
    const actual = substitutionModule.substitution(
      "thinkful",
      "abcabcabcabcabcabcabcabcyz"
    );
    expect(actual).to.be.false;
  });

  it("All characters in alphabet parameter should be unique, otherwise return false", () => {
    const actual = substitutionModule.substitution(
      "thinkful",
      "abcabcabcabcabcabcabcabcyz"
    );
    expect(actual).to.be.false;
  });
});
