// take number from a string
const myArgs = process.argv[2];
const integer = parseFloat(myArgs);
// change a string into array
const myUnit = myArgs.split('');
// take a last word from array
const myConvert = myUnit[myUnit.length - 1];

// convert unit
switch (myConvert) {
    case 't':
        console.log(integer / 3.048);
        break;
    case 'm':
        console.log(integer * 3.048);
        break;
    case 'c':
        console.log((integer * 9 / 5) + 32);
        break;
    case 'f':
        console.log((integer - 32) * 5 / 9);
        break;
    default:
        console.log('Please input your number');
        break;
}
