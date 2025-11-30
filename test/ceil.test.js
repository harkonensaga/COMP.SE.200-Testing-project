import { expect } from "chai";
import ceil from "../src/ceil.js";

/*
* This is a test file for ceil.js.
* Tester: Olivia Härkönen
*/
describe("ceil", () => {

    it("ceil without precision", () => {
        expect(ceil(4.006)).to.eq(5);
    });

    it("ceil with precision 0", () => {
        expect(ceil(4.006)).to.eq(5);
    });

    it("ceil with precision 2", () => {
        expect(ceil(6.004, 2)).to.eq(6.01);
    });

    it("ceil with precision 3", () => {
        expect(ceil(6.004, 3)).to.eq(6.004);
    });

    it("ceil with minus precision", () => {
        expect(ceil(6040, -2)).to.eq(6100);
    });
});