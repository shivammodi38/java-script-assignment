// 1. Reverse a string
/*
Approach:
We take an empty string called result to store the reversed string.
The loop starts from the last character of the original string
and moves backwards until it reaches the first character.
In each iteration, the current character is added to result.
This way, the characters are stored in reverse order.
*/

function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  console.log(result);
}
reverseString("hello");


// 2. Check palindrome
/*
Approach:
A palindrome is a word that reads the same from both directions.
We create an empty string and use a loop to store the characters
of the original string in reverse order.
After reversing the string, we compare it with the original.
If both strings are equal, the word is a palindrome.
*/

function itsPalindrome(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  console.log(str === reversed);
}
itsPalindrome("madam");


// 3. Count vowels and consonants
/*
Approach:
We initialize two counters, vowels and consonants, with zero.
We convert the string into lowercase so that both uppercase
and lowercase letters can be checked in the same way.
Then, we check each character to see whether it is an alphabet.
If it belongs to a, e, i, o, u, we increase the vowel count.
Otherwise, we increase the consonant count.
Spaces and special characters are ignored.
*/

function countVowelsAndConsonants(str) {
  let vowels = 0;
  let consonants = 0;
  for (let ch of str.toLowerCase()) {
    if (ch >= "a" && ch <= "z") {
      if ("aeiou".includes(ch)) {
        vowels++;
      } else {
        consonants++;
      }
    }


  }
  console.log("Vowels:- " + vowels);
  console.log("Consonants:- " + consonants);
}
countVowelsAndConsonants("hello world");


// 4. Find the second-largest distinct number
/*
Approach:
First, we find the smallest number in the array and use it
to initialize the largest and second variables.
We then traverse the array and compare each number with largest.
If a number is greater than largest, the previous largest
becomes the second-largest and the current number becomes largest.
Otherwise, if a number is smaller than largest but greater
than second, we update second.
This ensures that repeated largest values are not counted twice.
*/

let numbers = [10, 5, 20, 8, 20];

function secondLargest(arr) {
  let smallest = Math.min(...arr);
  let largest = smallest;
  let second = smallest;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > second) {

      second = arr[i];
      
    }
  }

  console.log("2nd largest number is:- " + second);
}

secondLargest(numbers);


// 5. Remove duplicates without using Set
/*
Approach:
We create an empty array called result to store unique numbers.
For every element in the original array, we use another loop
to check whether that number already exists in result.
If a matching number is found, we mark found as true.
If the number is not found, we add it to result.
Finally, the array contains each number only once.
*/

let numbers2 = [1, 2, 2, 3, 1];

function removeDuplicates(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let found = false;

    for (let k = 0; k < result.length; k++) {
      if (arr[i] === result[k]) {
        found = true;
      }
    }

    if (found === false) {
      result.push(arr[i]);
    }
  }

  console.log("Duplicate number is:- [" + result.join(",") + "]");
}

removeDuplicates(numbers2);


// 6. Find the sum of even numbers
/*
Approach:
We initialize a variable called sum with zero.
Then, we go through each number in the array using a loop.
The modulus operator (%) checks whether a number is divisible by 2.
If the remainder is zero, the number is even,
so we add it to the sum.
After checking all the numbers, we print the final sum.
*/

function sumOfEvens(arr) {
  let sum = 0;
  for (let n of arr) {
    if (n % 2 === 0) {
      sum += n;
    }
  }
  console.log("sum of even nimber:-" + sum);
}
sumOfEvens([1, 2, 3, 4, 5, 6]);


// 7. Find the frequency of an element
/*
Approach:
Frequency means the number of times an element appears
in an array.
We initialize a counter called count with zero.
Then, we check every element of the array against the given element.
Whenever both values match, we increase count by one.
After checking the complete array, count gives the frequency
of the given element.
*/

let freq = [1, 2, 2, 3, 2];
let element = 2;

function frequency(arr, element) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      count++;
    }
  }

  console.log("element has appeard this many time:- " + count);
}

frequency(freq, element);


// 8. Check anagram
/*
Approach:
Anagrams are words that contain the same letters
with the same frequency, but in a different order.
First, we convert both strings into lowercase.
Then, split() converts each string into an array of characters,
sort() arranges those characters alphabetically,
and join() combines them back into strings.
Finally, we compare both results.
If they are equal, the two words are anagrams.
*/

let str1 = "listen";
let str2 = "silent";

function isAnagram(a, b) {
  let first = a.toLowerCase().split("").sort().join("");
  let second = b.toLowerCase().split("").sort().join("");

  if (first === second) {
    console.log("it is a Anagram");
  } else {
    console.log("no its not Anagram");
  }
}

isAnagram(str1, str2);


// 9. Move zeros to the end
/*
Approach:
We create an empty array called result and initialize
zeroCount with zero.
While going through the original array, we separate zeros
from non-zero numbers.
Non-zero numbers are added directly to result,
while every zero increases zeroCount.
After checking all elements, we use another loop
to add the counted zeros to the end of result.
This keeps the original order of the non-zero numbers unchanged.
*/

function moveZeros(arr) {
  let result = [];
  let zeroCount = 0;
  for (let n of arr) {
    if (n === 0) {
      zeroCount++;
    } else {
      result.push(n);
    }
  }
  for (let i = 0; i < zeroCount; i++) {
    result.push(0);
  }
  console.log(result);
}
moveZeros([0, 1, 0, 3, 12]);