/******************************************************

Convert a Hexadecimal array of numbers into decimal values. The decimal values
should be treated as ASCII character codes and converted into characters. Return
a string of those characters.

See the MDN docs for `String.fromCharCode()` method for how to convert character
codes into ASCII characters.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

Examples:

hexadecimalToString(['0x004a']) => 74 => "J"
hexadecimalToString(['0x0041', '0x0042', '0x0043']) => 65, 66, 67 => "ABC"
hexadecimalToString(['0x0048', '0x0065', '0x0078', '0x0061']) => 72, 101, 120, 97 => "Hexa"

*******************************************************/

function hexadecimalToString(hexadecimalChars) {
    // Your code here
}

/* Comment in code below to run local tests */

/* SET #1: Checks for correct characters */

// console.log(hexadecimalToString(['0x0041', '0x0042', '0x0043']));  // 'ABC'
// console.log(hexadecimalToString([ '0x0031', '0x0032', '0x0033' ])); // '123'

/* SET #2: The tests below check for STRICT equality. If the tests above print
the expected output, but the tests below print "false", then it means your
solution will NOT pass the test specs. This may be because there are nullish
values present from your coversion that are not being printed to the console.
Run the test specs for more information and use console.logs in your solution to
help debug. */

// console.log(hexadecimalToString(['0x0041', '0x0042', '0x0043']) === 'ABC'); // true
// console.log(hexadecimalToString([ '0x0031', '0x0032', '0x0033' ]) === '123'); // true

module.exports = hexadecimalToString;