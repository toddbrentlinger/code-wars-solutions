'use strict';

function arrayDiff(a, b) {
    // Filter array 'a' with callback function returning true 
    // if value at current index is NOT included in array 'b'
    return a.filter(num => !b.includes(num));
}