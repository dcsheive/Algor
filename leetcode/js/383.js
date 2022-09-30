/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    let obj = {}
    for (let i of ransomNote){
        if (!( i in obj)) obj[i] = 1;
        else obj[i] ++;
    }
    for (let i of magazine){
        if ( i in obj) obj[i]--;
    }
    for (let k in obj){
        if (obj[k] > 0) return false;
    }
    return true;
};

console.log(canConstruct("aa", "ab"))
console.log(canConstruct("aa", "aab"))
console.log(canConstruct("a", "b"))