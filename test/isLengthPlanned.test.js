import { expect } from 'chai';
import isLength from "../src/isLength.js";

/*
* Test file for isLength.js, based on the test functions written in the original test plan.
* Tester: Sampo Järvenpää
*/
describe('isLengthPlanned', () => {
    it('positive integer returns true', () => {
        expect(isLength(5)).to.equal(true);
    });

    it("negative integer returns false", () => {
        expect(isLength(-1)).to.equal(false);
    });

    it("infinity returns false", () => {
        expect(isLength(Infinity)).to.equal(false);
    });

    it("whole number float returns true", () => {
        expect(isLength(4.0)).to.equal(true);
    });

    it("fractional float returns false", () => {
        expect(isLength(4.1)).to.equal(false);
    });

    it("string returns false", () => {
        expect(isLength("5")).to.equal(false);
    });

    it("max safe integer returns true", () => {
        expect(isLength(9007199254740991)).to.equal(true);
    });
});