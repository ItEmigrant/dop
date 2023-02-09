export function Sum(...num: Array<number>) {
    return num.reduce((acc, el) => acc + el)

}

export const getTriangleType = (a: number, b: number, c: number):string => {
    if (a + b >= c && b + c >= a && c + a >= b) {
        if (a === b && b === c) {
            return "10"
        } else if (a === b || a === c || b === c) {
            return "01"
        }
        else {
            return "11"
        }

    } else {
        return "00"
    }

}


