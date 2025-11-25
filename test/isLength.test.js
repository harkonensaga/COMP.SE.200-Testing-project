//const isLength = require("../src/isLength.js");
import isLength from "../src/isLength.js";
import { expect } from "chai"

describe("isLength tests", () => {

    it("positive integer returns true", () => {
        expect(isLength(5)).to.equal(true);
    })

    it("negative integer returns false", () => {
        expect(isLength(-1)).to.equal(false);
    })

    it("infinity returns false", () => {
        expect(isLength(Infinity)).to.equal(false);
    })

    it("whole number float returns true", () => {
        expect(isLength(4.0)).to.equal(true);
    })

    it("fractional float returns false", () => {
        expect(isLength(4.1)).to.equal(false);
    })

    it("string returns false", () => {
        expect(isLength("5")).to.equal(false);
    })

    it("max safe integer returns true", () => {
        expect(isLength(9007199254740991)).to.equal(true);
    })
});