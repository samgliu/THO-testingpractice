import { reverseString } from "../src/reverseString";

test("reverseString", () => {
    expect(reverseString("reverseString")).toMatch(/gnirtSesrever/);
});

test("ABCD", () => {
    expect(reverseString("ABCD")).toMatch(/DCBA/);
});

test("I don't think so", () => {
    expect(reverseString("I don't think so")).toMatch(/os kniht t'nod I/);
});
