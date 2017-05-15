// Find longest palindromic substring in a given string

function bruteForcePalindrome(str) {
    let longestSubstring = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j + i < str.length + 1; j++) {
            let currentSubstring = str.substring(i, i+j);
            if (isPalindrome(currentSubstring) && longestSubstring.length < currentSubstring.length) {
                longestSubstring = currentSubstring;
            }
        }
    }
    return longestSubstring;
}


function isPalindrome(str) {
    let front = 0;
    let end = str.length - 1;

    while (front < end) {
        if (str.charAt(front) === str.charAt(end)) {
            front++;
            end--;
        } else {
            return false;
        }
    }
    return true;
}


function dpPalindrome(str) {
    //Fill in true/false for palindromeMap
    let palArr = [];
    //Fill in palindromeMap
    //palindromeMap[0][0] = true means palindrome from starting at 0th index to 0th index is a palindrome
    for (let i = 0; i < str.length; i++) {
        palArr.push([]);
        for (let j = 0; j < str.length; j++) {
            palArr[i][j] = i === j;
        }
    }

    for (let i = 1; i < str.length; i++) {
        palArr[i-1][i] = str.charAt(i-1) === str.charAt(i);
    }
    
    for (let length = 2; length < str.length; length++) {
        for (let start = 0; start + length < str.length; start++) {
            let end = start + length;
            palArr[start][end] = palArr[start+1][end-1] && str.charAt(start) === str.charAt(end);
        }
    }

    let length = 0;
    let start = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            if (palArr[i][j] && (j - i + 1 > length)) {
                start = i;
                length = j-i+1;
            }
        }
    }
    return str.substring(start, length+1+start);
}


console.log(dpPalindrome('abcdcbfbcd'));

