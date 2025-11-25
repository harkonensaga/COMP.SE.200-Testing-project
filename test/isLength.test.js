//const isLength = require("../src/isLength.js");
import { expect } from 'chai';
import isLength from "../src/isLength.js";

/*it("positive integer returns true", () => {
    assert.equal(isLength(5)).toBe(true);
});

it("negative integer returns false", () => {
    assert.equal(isLength(-1)).toBe(false);
});

it("infinity returns false", () => {
    assert.equal(isLength(Infinity)).toBe(false);
});

it("whole number float returns true", () => {
    assert.equal(isLength(4.0)).toBe(true);
});

it("fractional float returns false", () => {
    assert.equal(isLength(4.1)).toBe(false);
});

it("string returns false", () => {
    assert.equal(isLength("5")).toBe(false);
});

it("max safe integer returns true", () => {
    assert.equal(isLength(9007199254740991)).toBe(true);
});*/

describe('isLength', function() {
  it('positive integer returns true', function() {
    expect(isLength(5)).to.equal(true);
  });
});