'use strict';

function digital_root(n) {
    while (n > 9) { // Loop until n is single digit
        n = n.toString() // Convert Number to String
            .split('') // Split into individual digits (still as strings)
            .reduce((accum, curr) => accum + +curr, 0); // Add each value to previous after converting back to Number
    }
    return n;
}