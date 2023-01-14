module.exports = function toReadable (number) {
  let zero = "zero";
    let one = "one";
    let two = "two";
    let three = "three";
    let four = "four";
    let five = "five";
    let six = "six";
    let seven = "seven";
    let eight = "eight";
    let nine = "nine";
    let ten = "ten";
    let eleven = "eleven";
    let twelve = "twelve";
    let thirteen = "thirteen";
    let fifteen = "fifteen";
    let eighteen = "eighteen";
    let lastNum = number % 10;
    let lastTwoNum = number % 100;
    let hundred = " hundred";

    function firstDigit(n) {
        while (n > 10) {
            n /= 10;
        }
        return Math.floor(n);
    }

    function initialDigits(x) {
        if (x === 1) {
            return one;
        } else if (x === 2) {
            return two;
        } else if (x === 3) {
            return three;
        } else if (x === 4) {
            return four;
        } else if (x === 5) {
            return five;
        } else if (x === 6) {
            return six;
        } else if (x === 7) {
            return seven;
        } else if (x === 8) {
            return eight;
        } else if (x === 9) {
            return nine;
        }
    }

    function decimal(y) {
        if (y === 10) {
            return ten;
        } else if (y === 11) {
            return eleven;
        } else if (y === 12) {
            return twelve;
        } else if (y === 13) {
            return thirteen;
        } else if (y === 14) {
            return "fourteen";
        } else if (y === 15) {
            return fifteen;
        } else if (y === 16) {
            return "sixteen";
        } else if (y === 17) {
            return "seventeen";
        } else if (y === 18) {
            return eighteen;
        } else if (y === 19) {
            return "nineteen";
        } else if (y === 20) {
            return "twenty";
        } else if (y > 20 && y < 30) {
            return "twenty" + " " + initialDigits(lastNum);
        } else if (y === 30) {
            return "thirty";
        } else if (y > 30 && y < 40) {
            return "thirty" + " " + initialDigits(lastNum);
        } else if (y === 40) {
            return "forty";
        } else if (y > 40 && y < 50) {
            return "forty" + " " + initialDigits(lastNum);
        } else if (y === 50) {
            return "fifty";
        } else if (y > 50 && y < 60) {
            return "fifty" + " " + initialDigits(lastNum);
        } else if (y > 59 && y < 100) {
            if (y > 79 && y < 90) {
                if (y === 80) {
                    return "eighty";
                } else {
                    return (
                        initialDigits(firstDigit(y)) +
                        "y" +
                        " " +
                        initialDigits(lastNum)
                    );
                }
            } else if (lastNum === 0) {
                return initialDigits(firstDigit(y)) + "ty";
            } else {
                return (
                    initialDigits(firstDigit(y)) +
                    "ty" +
                    " " +
                    initialDigits(lastNum)
                );
            }
        }
    }

    if (number === 0) {
        return zero;
    } else if (number > 0 && number < 10) {
        return initialDigits(number);
    } else if (number > 9 && number < 100) {
        return decimal(number);
    } else if (number > 99 && number < 1000) {
        if (number === 100) {
            return "one" + hundred;
        } else if (lastTwoNum === 0) {
            return initialDigits(firstDigit(number)) + hundred;
        } else if (lastTwoNum < 10) {
            return (
                initialDigits(firstDigit(number)) +
                hundred +
                " " +
                initialDigits(lastNum)
            );
        } else if (lastTwoNum > 9) {
            return (
                initialDigits(firstDigit(number)) +
                hundred +
                " " +
                decimal(lastTwoNum)
            );
        }
    }
}
