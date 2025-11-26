import { expect } from 'chai';
import upperFirst from "../src/upperFirst.js";

describe('upperFirst', () => {
    it('non-capital word', () => {
        expect(upperFirst("test")).to.equal("Test");
    });

    it('capital word', () => {
        expect(upperFirst("Best")).to.equal("Best");
    });
    
    it('all caps word', () => {
        expect(upperFirst("CREST")).to.equal("CREST");
    });
    
    it('all caps except first letter', () => {
        expect(upperFirst("lEST")).to.equal("LEST");
    });
    
    it('string number', () => {
        expect(upperFirst("55")).to.equal("55");
    });
    
    it('special character', () => {
        expect(upperFirst("$ars")).to.equal("$ars");
    });
    
    it('non-standard character (ö)', () => {
        expect(upperFirst("öö")).to.equal("Öö");
    });
    
    it('empty string', () => {
        expect(upperFirst("")).to.equal("");
    });
    
    it('integer -> error', () => {
        expect(() => {upperFirst(45);}).to.throw("string.slice is not a function");
    });
});