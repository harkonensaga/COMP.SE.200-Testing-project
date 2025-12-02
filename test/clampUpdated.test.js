import { expect } from 'chai';
import clamp from "../src/clamp.js";

/*
* Test file for clamp.js, updated with more tests and a focus on expecting errors when using bad input params.
* Tester: Sampo Järvenpää
*/
describe('clampUpdated', () => {
    it('value within range', () => {
        expect(clamp(5, 1, 10)).to.equal(5);
    });

    it("value too large", () => {
        expect(clamp(999, 1, 10)).to.equal(10);
    });

    it("negative value", () => {
        expect(clamp(-5, 1, 10)).to.equal(1);
    });

    it("infinity", () => {
        expect(clamp(Infinity, 1, 10)).to.equal(10);
    });

    it("0 size range", () => {
        expect(clamp(0, 5, 5)).to.equal(5);
    });

    it("negative size range -> error", () => {
        expect(() => {clamp(0, 10, 1);}).to.throw(Error);
    });

    it("negative size range 2 -> error", () => {
        expect(() => {clamp(20, 10, 1);}).to.throw(Error);
    });

    it("null value -> error", () => {
        expect(() => {clamp(20, null, 1);}).to.throw(Error);
    });

    it("NaN value -> error", () => {
        expect(() => {clamp(20, 1, NaN);}).to.throw(Error);
    });

    it("incorrect type -> error", () => {
        expect(() => {clamp("twenty", 1, 10);}).to.throw(Error);
    });
});