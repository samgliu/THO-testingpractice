import Cal from "../src/calculator";

test("2 + 3", () => {
    expect(Cal.calculator().add(2, 3)).toBe(5);
});

test("0 + 1", () => {
    expect(Cal.calculator().add(0, 1)).toBe(1);
});

test("999 - 123", () => {
    expect(Cal.calculator().subtract(999, 123)).toBe(876);
});

test("10 - 8", () => {
    expect(Cal.calculator().subtract(10, 8)).toBe(2);
});

test("10 - 8", () => {
    expect(Cal.calculator().subtract(10, 8)).toBe(2);
});

test("10 / 2", () => {
    expect(Cal.calculator().divide(10, 2)).toBeCloseTo(5);
});

test("100 / 3", () => {
    expect(Cal.calculator().divide(100, 3)).toBeCloseTo(33.33);
});

test("100 * 3", () => {
    expect(Cal.calculator().multiply(100, 3)).toBe(300);
});

test("23 * 34", () => {
    expect(Cal.calculator().multiply(23, 34)).toBe(782);
});
