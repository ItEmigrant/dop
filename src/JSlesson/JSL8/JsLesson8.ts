export function Sum(...num: Array<number>) {
    return num.reduce((acc, el) => acc + el)

}

export const getTriangleType = (a: number, b: number, c: number): string => {
    if (a + b >= c && b + c >= a && c + a >= b) {
        if (a === b && b === c) {
            return "10"
        } else if (a === b || a === c || b === c) {
            return "01"
        } else {
            return "11"
        }

    } else {
        return "00"
    }
}

export function getSum(num: number) {

    return num.toString().split("").map(s => +s).reduce((acc, el) => acc + el)


}

export function creatorSum(...numArr: Array<number>): boolean {
    let sumN = 0;
    let sumP = 0;
    for (let i = 0; i < numArr.length; i++) {
        if (numArr.indexOf(numArr[i]) % 2 === 0) {
            sumP += numArr[i]
        } else {
            sumN += numArr[i]
        }
    }
    return sumP>sumN
}
