const zero = [
    [1, 1, 1, 1], 
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1]
];

const one = [
    [0, 0, 0, 1], 
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
];

const two = [
    [1, 1, 1, 1], 
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 1]
];

const three = [
    [1, 1, 1, 1], 
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 1, 1, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [1, 1, 1, 1]
];

const four = [
    [1, 0, 0, 1], 
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1]
];

const five = [
    [1, 1, 1, 1], 
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [1, 1, 1, 1]
];

const six = [
    [1, 1, 1, 1], 
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1]
];

const seven = [
    [1, 1, 1, 1], 
    [1, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1]
];

const eight = [
    [1, 1, 1, 1], 
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1]
];

const nine = [
    [1, 1, 1, 1], 
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1]
];

const p = [
    [0, 1, 1, 1, 1], 
    [0, 1, 0, 0, 1], 
    [0, 1, 1, 1, 1], 
    [0, 1, 0, 0, 0], 
    [0, 1, 0, 0, 0] 
];

const a = [
    [0, 1, 1, 1, 0], 
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1], 
    [1, 0, 0, 0, 1], 
    [1, 0, 0, 0, 1] 
];

const m = [
    [1, 0, 0, 0, 1], 
    [1, 1, 0, 1, 1], 
    [1, 0, 1, 0, 1], 
    [1, 0, 0, 0, 1], 
    [1, 0, 0, 0, 1] 
];

const activeFirstDigit = [
    [1], 
    [1], 
    [1], 
    [1], 
    [1], 
    [1], 
    [1]
];

const defaultFirstDigit = [
    [0], 
    [0], 
    [0], 
    [0], 
    [0], 
    [0], 
    [0]
];

class digitMap {
    constructor() {
        this.defaultFirstDigit = defaultFirstDigit;
        this.activeFirstDigit = activeFirstDigit;
        this.digitMap = [
            zero, 
            one, 
            two, 
            three, 
            four, 
            five, 
            six, 
            seven, 
            eight, 
            nine
        ];
        this.p = p;
        this.a = a;
        this.m = m;
    }
    getFirstDigit(isActive) {
        return isActive ? this.activeFirstDigit : this.defaultFirstDigit;
    }
    getNum(number) {
        return this.digitMap[number];
    }
    getFirstLetter(isAfternoon) {
        return isAfternoon ? this.p : this.a;
    }
    getSecondLetter() {
        return this.m;
    }
}

export default digitMap;