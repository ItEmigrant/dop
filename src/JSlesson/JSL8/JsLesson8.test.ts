import {getSum, getTriangleType, Sum} from "./JsLesson8";

test("return SUM numbers", () => {

    const testSum = Sum(2,2,2,2);

    expect(testSum).toBe(8);

})

test("return TriangleType", () => {

    expect(getTriangleType(2,2,2)).toBe('10');
    expect(getTriangleType(5,5,3)).toBe('01');
    expect(getTriangleType(55,25,35)).toBe('11');
    expect(getTriangleType(2, 10, 2)).toBe('00');

})

test("return get sum", () => {

    expect(getSum(111)).toBe(3);
    expect(getSum(1000)).toBe(1);
    expect(getSum(9999)).toBe(36);
    expect(getSum(0)).toBe(0);
    expect(getSum(101010)).toBe(3);


})