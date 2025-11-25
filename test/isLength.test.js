//const isLength = require("../src/isLength.js");
import isLength from "../src/isLength.js";

test("positive integer returns true", () => {
    expect(isLength(5)).toBe(true);
})

test("negative integer returns false", () => {
    expect(isLength(-1)).toBe(false);
})

test("infinity returns false", () => {
    expect(isLength(Infinity)).toBe(false);
})

test("whole number float returns true", () => {
    expect(isLength(4.0)).toBe(true);
})

test("fractional float returns false", () => {
    expect(isLength(4.1)).toBe(false);
})

test("string returns false", () => {
    expect(isLength("5")).toBe(false);
})

test("max safe integer returns true", () => {
    expect(isLength(9007199254740991)).toBe(true);
})