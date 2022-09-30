/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const dict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let value = 0;
    for (let i = 0; i< s.length; i++){
        if (i !== s.length - 1) {
            if (dict[s[i]] < dict[s[i+1]]){
                value += (dict[s[i+1]] - dict[s[i]]);
                i ++;
            }
            else value += dict[s[i]];
        }
        else value += dict[s[i]];
    }
    return value;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));