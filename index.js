//Code your solutions in this file
// first function fiveToOneHundred
const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++) {
        console.log(i);
    }
}
// fiveToOneHundred();

const multiplesOfThree = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}
// multiplesOfThree();

const multipletimesOfThreeOrFive = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
}
// multipletimesOfThreeOrFive();

const untilNum = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }
}
// untilNum(5);

const multiply = (num1, num2) => {
    let result = num1 * num2;
    return result;
}
// console.log(multiply(5, 5));

const add = (n1, n2) => {
    if (n1 === n2) {
        return (n1 + n2) * 3
    } else {
        return n1 + n2
    }
}
// console.log(add(2, 4));