function longestPalindrome(str) {
    //example string abcdcab
    var subStrings = [];
    var maxLength = 1;
    var start = 0;

    //substrings[0][0] represents whether substring from index 0 to index 0 is a palindrome
    //since all one character strings are palindromes, then all substring[x][x] where 0 <= x < str.length
    //is true
    for (var i = 0; i < str.length; i++) {
        subStrings[i] = [];
        subStrings[i][i] = true;
    }

    //substrings[x][x+1] are true if and only if
    for (var i = 0; i < str.length - 1; i++) {
        if (str.charAt(i) === str.charAt(i+1)) {
            subStrings[i][i+1] = true;
            maxLength = 2;
        }
    }

    for (var k = 3; k <= str.length; k++) {
        for (var i = 0; i < str.length - k + 1; i++) {
            //j represents starting index + length of substring
            var j = i + k - 1;

            if (i+1 === 6) {
                console.log(str.charAt(i));
                var bool = subStrings[i+1][j-1];
                var charAtI = str.charAt(i);
                var charAtJ = str.charAt(j);
            }
            if (subStrings[i+1][j-1] && str.charAt(i) === str.charAt(j)) {
                subStrings[i][j] = true;

                if (k > maxLength) {
                    start = i;
                    maxLength = k;
                }
            }
        }
    }

    console.log(start);
    console.log(maxLength);
    console.log(`longest substring is: ${str.substring(start, start+maxLength)}`);
}

longestPalindrome('abcdefgfsfd');