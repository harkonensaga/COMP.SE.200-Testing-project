import { expect } from 'chai';
import capitalize from "../src/capitalize.js";

/*
* Test file for capitalize.js.
* Tester: Sampo Järvenpää
*/
describe('capitalize', () => {
    it('non-capital string', () => {
        expect(capitalize("nOrmAL TexT1!")).to.equal("Normal text1!");
    });
    
    it('capital string', () => {
        expect(capitalize("NORMal TexT1!")).to.equal("Normal text1!");
    });
    
    it('unchanged string', () => {
        expect(capitalize("Normal text1!")).to.equal("Normal text1!");
    });
    
    it('long string', () => {
        expect(capitalize("thE caR Was N... ThE CaR. No. NOT Th... thIS waS a TRaveSty.")).to.equal("The car was n... the car. no. not th... this was a travesty.");
    });
    
    it('string number', () => {
        expect(capitalize("55")).to.equal("55");
    });
    
    it('special character', () => {
        expect(capitalize("$aRS")).to.equal("$ars");
    });
    
    it('non-standard character (ö)', () => {
        expect(capitalize("öÖ")).to.equal("Öö");
    });
    
    it('empty string', () => {
        expect(capitalize("")).to.equal("");
    });
    
    it('integer -> string', () => {
        expect(capitalize(45)).to.eq("45");
    });
    
    it('null -> error', () => {
        expect(() => {capitalize(null);}).to.throw(Error);
    });
});