import {creatorSum, getSum, getTriangleType, Sum} from "./JsLesson8";

test("return SUM numbers", () => {

    const testSum = Sum(2, 2, 2, 2);

    expect(testSum).toBe(8);

})

test("return TriangleType", () => {

    expect(getTriangleType(2, 2, 2)).toBe('10');
    expect(getTriangleType(5, 5, 3)).toBe('01');
    expect(getTriangleType(55, 25, 35)).toBe('11');
    expect(getTriangleType(2, 10, 2)).toBe('00');

})

test("return get sum", () => {

    expect(getSum(111)).toBe(3);
    expect(getSum(1000)).toBe(1);
    expect(getSum(9999)).toBe(36);
    expect(getSum(0)).toBe(0);
    expect(getSum(101010)).toBe(3);


})

test("creator sum", () => {

    expect(creatorSum(1, 1000, 30, 300, 44, 444, 2, 547)).toBe(false);
    expect(creatorSum(1000, 1, 300, 30, 444, 1, 565656565, 444, 65656565)).toBe(true);
    expect(creatorSum(1, 199, 3, 30, 6767676)).toBe(true);
    expect(creatorSum(199, 1)).toBe(true);

})