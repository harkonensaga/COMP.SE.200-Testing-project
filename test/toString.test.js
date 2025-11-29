import { expect } from "chai";
import toString from "../src/toString.js";

/*
* This is a test file for toString.js.
* Tester: Olivia Härkönen
*/
describe("Test toString", () => {
    it("null value", () => {
        expect(toString(null)).to.eq("");
    });
    
    it("zero", () => {
        expect(toString(0)).to.eq("0");
    });

    it("minus zero", () => {
        expect(toString(-0)).to.eq("-0");
    });

    it("min value", () => {
        expect(toString(Number.MIN_VALUE)).to.eq("5e-324");
    });

    it("max value", () => {
        expect(toString(Number.MAX_VALUE)).to.eq("1.7976931348623157e+308");
    });

    it("infinity", () => {
        expect(toString(Infinity)).to.eq("Infinity");
    });

    it("negative infinity", () => {
        expect(toString(-Infinity)).to.eq("-Infinity");
    });

    it("array of two", () => {
        expect(toString([1, 5])).to.eq("1,5");
    });

    it("empty array", () => {
        expect(toString([])).to.eq("");
    });

    it("string", () => {
        expect(toString("Seven")).to.eq("Seven");
    });

    it("symbol", () => {
        expect(toString(Symbol.iterator)).to.eq("Symbol(Symbol.iterator)");
    });
});