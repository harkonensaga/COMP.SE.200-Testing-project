import { expect } from 'chai';
import clamp from "../src/clamp.js";

describe('clamp', () => {
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

    it("negative size range", () => {
        expect(clamp(0, 10, 1)).to.equal(null);
    });

    it("negative size range 2", () => {
        expect(clamp(20, 10, 1)).to.equal(null);
    });
});