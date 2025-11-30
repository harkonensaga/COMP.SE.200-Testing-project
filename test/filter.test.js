import { expect } from "chai";
import filter from "../src/filter.js";

/*
* This is a test file for filter.js.
* Tester: Olivia Härkönen
*/
describe("filter", () => {
    const users = [
        { "user": "barney", "active": true },
        { "user": "fred",   "active": false },
        { "user": "pebbles", "active": true },
        { "user": "fred", "active": true }
    ];
    
    it("get active users", () => {
        expect(filter(users, ({ active }) => active)).to.eql(
            [{ "user": "barney", "active": true },
                { "user": "pebbles", "active": true },
                { "user": "fred", "active": true }
            ]);
    });

    it("null input returns empty array", () => {
        expect(filter(null, ({ a }) => a == true)).to.eql([[]]);
    });

    it("get all users named fred", () => {
        expect(filter(users, ({ user }) => user == "fred")).to.eql(
            [{ "user": "fred", "active": false },
                { "user": "fred", "active": true }
            ]);
    });
});