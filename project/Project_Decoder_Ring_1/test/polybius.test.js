// Write your tests here!
/*
The letters "I" and "J" share a space. When encoding, both letters can be converted to 42, 
*/

const expect = require("chai").expect;
const polybiusModule = require("../src/polybius");

describe("like foursquare, but high", () => {
  it("Should output a string after encoding", () => {
    ///const expected =  "4432423352125413"
    const actual = polybiusModule.polybius("thinkful");
    expect(actual).to.be.a("string");
  });

  it("Should return exact number of characters (including spaces) in a string after decoding, otherwise return false", () => {
    ///const expected = "4432423352125413"
    const actual = polybiusModule.polybius("thinkful");
    expect(actual).to.have.lengthOf(16);
  });

  it("Should maintain spaces throughout", () => {
    const expected = "3251131343 2543241341";
    const actual = polybiusModule.polybius("Hello world");
    expect(actual).to.eql(expected);
  });

  it("Should ignore capital letter", () => {
    const expected = "3251131343 2543241341";
    const actual = polybiusModule.polybius("Hello world");
    expect(actual).to.eql(expected);
  });

  it("Should output i and j both when decoding", () => {
    const expected = "th(i/j)nkful";
    const actual = polybiusModule.polybius("4432423352125413", false);
    expect(actual).to.eql(expected);
  });

  it("Should have i and j both share slot 42 when encoding", () => {
    const expected = "th(i/j)nkful";
    const actual = polybiusModule.polybius("4432423352125413", false);
    expect(actual).to.eql(expected);
  });
});
