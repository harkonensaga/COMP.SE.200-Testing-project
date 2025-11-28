import { expect } from "chai";
import toString from "../src/toString.js";

/*
* This is a test file for toString.js.
* Tester: Olivia Härkönen
*/

describe("Test toString", () => {
    it("null value", () => {
        expect(toString(null)).to.equal("");
    });
    
    it("zero", () => {
        expect(toString(0)).to.equal("0");
    });

    it("minus zero", () => {
        expect(toString(-0)).to.equal("-0");
    });

    it("min value", () => {
        expect(toString(Number.MIN_VALUE)).to.equal("5e-324");
    });

    it("max value", () => {
        expect(toString(Number.MAX_VALUE)).to.equal("1.7976931348623157e+308");
    });

    it("infinity", () => {
        expect(toString(Infinity)).to.equal("Infinity");
    });

    it("negative infinity", () => {
        expect(toString(-Infinity)).to.equal("-Infinity");
    });

    it("array of two", () => {
        expect(toString([1, 5])).to.equal("1,5");
    });

    it("empty array", () => {
        expect(toString([])).to.equal("");
    });

    it("string", () => {
        expect(toString("Seven")).to.equal("Seven");
    });

    it("symbol", () => {
        expect(toString(Symbol.iterator)).to.equal("Symbol(Symbol.iterator)");
    });
});