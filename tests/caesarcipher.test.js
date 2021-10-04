import Ciph from "../src/caesarcipher";

test("abcdefghijklmnopqrstuvwxyz", () => {
    expect(Ciph.cipher(1, "abcdefghijklmnopqrstuvwxyz")).toMatch(
        /bcdefghijklmnopqrstuvwxyza/
    );
});

test("I don't think So", () => {
    expect(Ciph.cipher(1, "I don't think So")).toMatch(/j epo'u uijol tp/);
});

test("abcdefghijklmnopqrstuvwxyz", () => {
    expect(Ciph.decipher(1, "bcdefghijklmnopqrstuvwxyza")).toMatch(
        /abcdefghijklmnopqrstuvwxyz/
    );
});

test("I don't think So", () => {
    expect(Ciph.decipher(1, "j epo'u uijol tpi don't think so")).toMatch(
        /i don't think so/
    );
});
