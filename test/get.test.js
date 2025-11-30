import { expect } from "chai";
import get from "../src/get.js";

/*
* This is a test file for get.js.
* Tester: Olivia Härkönen
*/
describe("get", () => {
    const object = { "a": [{ "b": { "c": 3 } }] };

    it("get top-level property", () => {
        expect(get(object, "a")).to.eq(object.a);
    });

    it("null path", () => {
        expect(get(object, null)).to.eq(object);
    });

    it("get nested value", () => {
        expect(get(object, "a[0].b.c")).to.eq(3);
    });

    it("get nested value with path as array", () => {
        expect(get(object, ["a", "0", "b", "c"])).to.eq(3);
    });

    it("return default for undefined paths", () => {
        expect(get(object, "a.b.c", "default")).to.eq("default");
    });

    it("returns default for null object", () => {
        expect(get(null, "a.b", "default")).to.eq("default");
    });

    it("returns undefined without default", () => {
        expect(get(null, "a.b")).to.eq(undefined);
    });

    it("returns falsy values instead of default", () => {
        const obj = { zero: 0, empty: null, bool: false, str: "" };
        expect(get(obj, "empty", "d")).to.eq(null);
        expect(get(obj, "zero", "d")).to.eq(0);
        expect(get(obj, "bool", "d")).to.eq(false);
        expect(get(obj, "str", "d")).to.eq("");
    });
});