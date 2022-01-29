// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'


    // Solution 1 
function reverseString(str) {
    const strArr = str.split('');
    strArr.reverse();
    return strArr.join('');
  }

    // Solution 1 (Better Code) --> replace const with return, then chain all methods
function reverseString(str) {
    return str
        .split('')
        .reverse()
        .join('');
}

// ----------------------------------------------------------------- //

    // Solution 2 (decrementing for loop)
function reverseString(str) {
    let revString = '';
    for(let i = str.length - 1; i >= 0; i--) {
        revString = revString + str[i];
    }
    return revString;
}

    // Solution 2 (incrementing for loop)
function reverseString(str) {
    let revString = '';
    for(let i = 0; i <= str.length - 1; i++) { // <-- change
        revString = str[i] + revString;
    }
    return revString;
}

// --------------------------------------------------------------- //

    // Solution 3 (for of loop)
function reverseString(str) {
    let revString = '';
    for(let char of str) {
        revString = char + revString;
    }
    return revString;
}
  
// --------------------------------------------------------------- //

    // Solution 4 (forEach)
function reverseString(str) {
    let revString = ''; 
    str.split('').forEach(function(char) { // High order array functions must have strings -> arrays | takes in iterator (char) 
        revString = char + revString;
    });
    return revString;
}

    // Solution 4 (Better Code)
function reverseString(str) {
    let revString = '';
    str.split('').forEach(char => revString = char + revString);

        return revString;
}

// ---------------------------------------------------------------- //

    // Solution 5 (reduce)
function reverseString(str) {
    return str.split('').reduce(function(revString, char) { // .split turns into array, .reduce takes in functions - also takes in second parameter of what it begins with
        return char + revString; // with high order arrays functions like reduce(), you can return another array 
    }, ''); // takes in a second parameter
}

    // Solution 5 (Better Code)
function reverseString(str) {
    return str.split('').reduce((revString, char) => char + revString, ''); // --> DON'T FORGET ''
}


  // CHALLENGE 2: VALIDATE A PALINDROME
  // Return true if palindrome and false if not
  // ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
  
  function isPalindrome(str) {
      const revString = str.split('').reverse().join('');

      return revString === str;
  }
  
  
  // CHALLENGE 3: REVERSE AN INTEGER
  // Return an integer in reverse
  // ex. reverseInt(521) === 125
  
  function reverseInt(int) {
      const revString = int.toString().split('').reverse().join(''); // takes the int(#) turns it into a string and reverses.

      // parseInt makes the string back to an integer.
      // Math.sign adds a negative value if output is negative
      return parseInt(revString) * Math.sign(int); 
  }
  
  
  
  // CHALLENGE 4: CAPITALIZE LETTERS
  // Return a string with the first letter of every word capitalized
  // ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

  // Method 1 (for loop)
  function capitalizeLetters(str) {
      const strArr = str.toLowerCase().split(' '); // set lowercase, and split into array ' ' SPACE BETWEEN to make the WORDS into an ARRAY, not letters!

      for(let i = 0; i < strArr.length; i++) {
          strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1); // Take out first character of word substring(0, 1) and add on the rest substring(1)
      }

      return strArr.join(' '); // remember to change the array back to a string.
  }
  
  // ------------------------------------------------------------------------------- //

  // Method 2 (map) -- RECOMMENDED
  function capitalizeLetters(str) {
      return str
        .toLowerCase()
        .split(' ')
    //  .map(word => return word[0].toUpperCase() + word.substr(1));
        .map(function(word){
            return word[0].toUpperCase() + word.substr(1);
      })
        .join(' ') // turn it back into an string
  }

  // -------------------------------------------------------------------------------- //

  // Method 3 (replace)

  /* <-- KEY -->
    \b = word boundary
    [a-z] = range
    /g = global (applies to all words)
    i = case insensitive
*/

  function capitalizeLetters(str) {
      return str.replace(/\b[a-z]/gi, function(char) {
          return char.toUpperCase();
      });
  }
  
  
  // CHALLENGE 5: MAX CHARACTER
  // Return the character that is most common in a string
  // ex. maxCharacter('javascript') == 'a'
  
  // Method 1 (object)
  
  function maxCharacter(str) {
      const charMap = {}; // empty object literal
      // Add 2 more variables for -> 'for in' loop. MUST BE 'let'
      let maxNum = 0;
      let maxChar = '';

      str.split('').forEach(function(char) { // turn string into array with .split, use a forEach loop
        // looking at each key value pair  
        if(charMap[char]) { // grabs the character, 
              charMap[char]++; // if character duplicate exists, add 1 
          } else { 
              charMap[char] = 1; // if character is new in the array, make the value set to 1
          }
      });

      // return highest letter count (for in loop) --> 'for in' is used to loop through an object, not array
      for(let char in charMap) {
          if(charMap[char] > maxNum) { // if char is > 0  
              maxNum = charMap[char]; // set the maxNum to the actual value
              maxChar = char;
          }
      }
      return maxChar;
  }
  
  
  
  // CHALLENGE 6: FIZZBUZZ
  // Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

  // Solution 1 (for loop)
function fizzBuzz() {
    for(let i = 1; i <= 100; i++) { // Create a for loop (prints 1 - 100)
        if (i % 3 === 0 && i % 5 === 0) { // DO THIS LAST! - if multiple of 3 and 5 return FizzBuzz
            console.log('FizzBuzz');
        } else if (i % 3 === 0) { // modulus (%) will give us a remainder. If no remainder, it will give us a multiple
            console.log('Fizz');
        } else if (i % 5 === 0) { // if multiple of 5, return Buzz
            console.log('Buzz');
        } else {
            console.log(i); // else, print a number
        }
    }
}

    // Solution 1 (better code)
    // can change to if(i % 15 === 0) {}


  // Call Function
  const output = reverseString('hello');
  
  console.log(output);