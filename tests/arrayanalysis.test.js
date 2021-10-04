import arrayanalysis from "../src/arrayanalysis";

test("array [1, 8, 3, 4, 2, 6]", () => {
    expect(arrayanalysis.arrayanalysis([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});

test("array [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]", () => {
    expect(arrayanalysis.arrayanalysis([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual(
        {
            average: 4.5,
            min: 0,
            max: 9,
            length: 10,
        }
    );
});

test("array [1.2, 3.0, 4.5, -1, -9.9]", () => {
    expect(arrayanalysis.arrayanalysis([1.2, 3.0, 4.5, -1, -9.9])).toEqual({
        average: -0.44,
        min: -9.9,
        max: 4.5,
        length: 5,
    });
});
