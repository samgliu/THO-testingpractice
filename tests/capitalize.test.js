import { capitalize } from "../src/capitalize";

test("capitalize", () => {
    expect(capitalize("capitalize")).toMatch(/Capitalize/);
});

test("america", () => {
    expect(capitalize("america")).toMatch(/America/);
});

test("love", () => {
    expect(capitalize("love")).toMatch(/Love/);
});
