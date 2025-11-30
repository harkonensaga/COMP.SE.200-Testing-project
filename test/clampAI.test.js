import { expect } from "chai";
import clamp from "../src/clamp.js";

describe('clampAI', () => {
    it('inside bounds stays same', () => {
        expect(clamp(5, 0, 10)).to.equal(5);
    });

    it('value below lower -> lower', () => {
        expect(clamp(-1, 0, 10)).to.equal(0);
    });

    it('value above upper -> upper', () => {
        expect(clamp(11, 0, 10)).to.equal(10);
    });

    it('value equal to bounds returns bound', () => {
        expect(clamp(5, 5, 5)).to.equal(5);
    });

    it('swapped bounds are handled (lower > upper)', () => {
        // inside after swap
        expect(clamp(3, 5, 1)).to.equal(3);
        // above swapped upper -> original lower
        expect(clamp(6, 5, 1)).to.equal(5);
        // below swapped lower -> original upper
        expect(clamp(0, 5, 1)).to.equal(1);
    });

    it('coerces numeric strings to numbers', () => {
        expect(clamp('7', '2', '5')).to.equal(5);
    });

    it('NaN input yields NaN', () => {
        const res = clamp(NaN, 0, 10);
        expect(Number.isNaN(res)).to.equal(true);
    });

    it('handles infinities correctly', () => {
        expect(clamp(Infinity, -10, 10)).to.equal(10);
        expect(clamp(-Infinity, -10, 10)).to.equal(-10);
    });

    it('missing bounds returns original value', () => {
        expect(clamp(42)).to.equal(42);
    });
});