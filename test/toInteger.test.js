import { expect } from 'chai';
import toInteger from "../src/toInteger.js";

describe('toInteger', () => {
    it('integer', () => {
        expect(toInteger(11)).to.equal(11);
    });
    
    it('float', () => {
        expect(toInteger(4.386312)).to.equal(4);
    });
    
    it('float 4.999999 -> 4', () => {
        expect(toInteger(4.999999)).to.equal(4);
    });

    it('whole number float', () => {
        expect(toInteger(11)).to.equal(11);
    });
    
    it('negative float', () => {
        expect(toInteger(-4.9999999)).to.equal(-4);
    });
    
    it('string', () => {
        expect(toInteger("5")).to.equal(5);
    });
    
    it('string float', () => {
        expect(toInteger("5.99")).to.equal(5);
    });
    
    it('min value', () => {
        expect(toInteger(Number.MIN_VALUE)).to.equal(0);
    });
    
    it('infinity', () => {
        expect(toInteger(Infinity)).to.equal(1.7976931348623157e+308);
    });
    
    it('array with single integer', () => {
        expect(toInteger([5])).to.equal(5);
    });
    
    /*it('array with multiple integers', () => {
        expect(toInteger([5, 12, 8])).to.equal(null);
    });*/
    
    it('array with string', () => {
        expect(toInteger(["5"])).to.equal(5);
    });
});