import {Sum} from "./JsLesson8";

test("return SUM numbers", () => {

    const testSum = Sum(2,2,2,2);

    expect(testSum).toBe(8);

})