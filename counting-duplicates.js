'use strict';

function duplicateCount(text) {
    const charsRepeatState = {}; // Object of chars as key and value is boolean representing if char is repeated
    let duplicateCount = 0; // Count of repeating characters
    // Loop each character after converting to lowercase
    for (const char of text.toLowerCase()) {
        // If character already in object
        if (char in charsRepeatState) { 
            // If character in object has value of false
            if (!charsRepeatState[char]) {
                duplicateCount++; // Increment duplicate character count
                charsRepeatState[char] = true; // Set char value in object to true
            }
        } else { // Else add character to object with value initialized to false
            charsRepeatState[char] = false;
        }
    }
    return duplicateCount;
}