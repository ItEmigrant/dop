import {getTriangleType, Sum} from "./JsLesson8";

test("return SUM numbers", () => {

    const testSum = Sum(2,2,2,2);

    expect(testSum).toBe(8);

})

test("return TriangleType", () => {

    expect(getTriangleType(1,1,1)).toBe('10');
    expect(getTriangleType(5,5,3)).toBe('01');
    expect(getTriangleType(55,25,35)).toBe('11');
    expect(getTriangleType(2, 10, 2)).toBe('00');

})
