import { expect } from "chai";
import words from "../src/words.js";

/*
* This is a test file for words.js.
* Tester: Olivia Härkönen
*/
describe("words", () => {
    it("splits words without special characters", () => {
        expect(words("Marley & me")).to.eql(["Marley", "me"]);
    });

    it("splits words including special characters", () => {
        expect(words("Marley & me", /[^, ]+/g)).to.eql(["Marley", "&", "me"]);
    });

    it("ascii basic split", () => {
        expect(words("test 1 2 3")).to.eql(["test", "1", "2", "3"]);
    });

    it("string with just special characters", () => {
        expect(words(" , , & ")).to.eql([]);
    });

    it("string with no matches for pattern", () => {
        expect(words("abc", /d+/g)).to.eql([]);
    });
});
