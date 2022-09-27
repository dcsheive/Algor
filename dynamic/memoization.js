//time: O(2^n)
//space: O(n)

const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

//time: O(n)
//space: O(n)

const fib2 = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib2(n - 1, memo) + fib2(n - 2, memo);
    return memo[n];
}

//time: O(2^n+m)
//space: O(n+m)

const gridTraveler = (x, y) => {
    if (x === 0 || y === 0) return 0;
    if (x === 1 && y === 1) return 1;
    return gridTraveler(x - 1, y) + gridTraveler(x, y - 1);
}

//time: O(n*m)
//space: O(n+m)

const gridTraveler2 = (x, y, memo = {}) => {
    const key = `${x},${y}`;
    if (key in memo) return memo[key]
    if (x === 0 || y === 0) return 0;
    if (x === 1 && y === 1) return 1;
    memo[key] = gridTraveler2(x - 1, y, memo) + gridTraveler2(x, y - 1, memo);
    return memo[key]
}

// console.log(fib(1));
// console.log(fib(5));
// console.log(fib(7));
// console.log(fib2(5));
// console.log(fib2(7));
// console.log(fib2(50));
// console.log(gridTraveler(4, 5));
// console.log(gridTraveler2(40, 50));

//time: O(n^m)
//space: O(m)

const canSum = (targetSum, arr) => {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;
    for (let num of arr) {
        const remainder = targetSum - num;
        if (canSum(remainder, arr)) return true;
    }
    return false;
}

//time: O(m*n)
//space: O(m)

const canSum2 = (targetSum, arr, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;
    for (let num of arr) {
        const remainder = targetSum - num;
        if (canSum2(remainder, arr, memo)) {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
}

// console.log(canSum(7, [5,3,4,7]));
// console.log(canSum(7, [2,4]));
// console.log(canSum2(7, [5,3,4,7]));
// console.log(canSum2(7, [2,4]));
// console.log(canSum2(300,[7,14])); 

// time: O(n^m *m)
// space: O(m)

const howSum = (targetSum, arr) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    for (let num of arr) {
        const remainder = targetSum - num;
        const result = howSum(remainder, arr);
        if (result != null) {
            return [...result, num];
        }
    }
    return null;
}

// time O(n*m^2)
// space O(m^2)

const howSum2 = (targetSum, arr, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    for (let num of arr) {
        const remainder = targetSum - num;
        const result = howSum2(remainder, arr, memo);
        if (result != null) {
            memo[targetSum] = [...result, num];
            return memo[targetSum];

        }
    }
    memo[targetSum] = null;
    return null;
}

// console.log(howSum(7, [5,3,4,7]));
// console.log(howSum(7, [2,4]));
// console.log(howSum2(7, [5,3,4,7]));
// console.log(howSum2(7, [2,4]));
// console.log(howSum2(300,[7,14]));

//time: O(n^m *m)
//space: O(m^2)

const bestSum = (targetSum, arr) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    let shortestCombo = null;
    for (let num of arr) {
        const remainder = targetSum - num;
        const result = bestSum(remainder, arr);
        if (result != null) {
            const combination = [...result, num];
            if (shortestCombo === null || combination.length < shortestCombo.length) {
                shortestCombo = combination;
            }
        }
    }
    return shortestCombo;
}

//time O(n*m^2)
//space O(m^2)

const bestSum2 = (targetSum, arr, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    let shortestCombo = null;
    for (let num of arr) {
        const remainder = targetSum - num;
        const result = bestSum2(remainder, arr);
        if (result != null) {
            const combination = [...result, num];
            if (shortestCombo === null || combination.length < shortestCombo.length) {
                shortestCombo = combination;
            }
        }
    }
    memo[targetSum] = shortestCombo
    return shortestCombo;
}

// console.log(bestSum(7, [5,3,4,7]));
// console.log(bestSum(8, [2,3,5]));
// console.log(bestSum(8, [1,4,5]));
// console.log(bestSum(7, [2,4]));

// n targetstr
// m wordBank
//time: O(n^m *m)
//space: O(m^2)

const canConstruct = (targetStr, wordBank) => {
    if (targetStr === "") return true;
    for (let word of wordBank) {
        if (targetStr.indexOf(word) === 0) {
            const result = targetStr.slice(word.length)
            if (canConstruct(result, wordBank)) return true;
        }
    }
    return false;
}

// n targetstr
// m wordBank
//time: O(n*m^2)
//space: O(m^2)

const canConstruct2 = (targetStr, wordBank, memo = {}) => {
    if (targetStr in memo) return memo[targetStr];
    if (targetStr === "") return true;
    for (let word of wordBank) {
        if (targetStr.indexOf(word) === 0) {
            const result = targetStr.slice(word.length);
            if (canConstruct2(result, wordBank, memo)) {
                memo[targetStr] = true;
                return true;
            }
        }
    }
    memo[targetStr] = false;
    return false;
}

// console.log(canConstruct("hello", ["he", "el", "llo", "lo"]))
// console.log(canConstruct("hello", ["el", "llo", "lo"]))
// console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
// console.log(canConstruct2("hello", ["he", "el", "llo", "lo"]))
// console.log(canConstruct2("hello", ["el", "llo", "lo"]))
// console.log(canConstruct2("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
// console.log(canConstruct2("oooooooooooooooooooooooof", ["o", "oo", "ooo", "oooo", "ooooo"]))

//m target
//n words
// O(n^m *m)
// O(m^2)
const countConstruct = (target, words) => {
    if (target === "") return 1;
    let count = 0;
    for (let word of words) {
        if (target.indexOf(word) === 0) {
            const result = target.slice(word.length)
            const numWays = countConstruct(result, words)
            count += numWays;
        }        
    }
    return count;
}

//m target
//n words
// O(n*m^2)
// O(m^2)
const countConstruct2 = (target, words, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === "") return 1;
    let count = 0;
    for (let word of words) {
        if (target.indexOf(word) === 0) {
            const result = target.slice(word.length)
            const numWays = countConstruct2(result, words, memo)
            count += numWays;
        }        
    }
    memo[target] = count;
    return count;
}

// console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
// console.log(countConstruct("hello", ["he", "el", "llo", "lo", "h"]))
// console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))
// console.log(countConstruct("hello", ["el", "llo", "lo"]))
// console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
// console.log(countConstruct2("hello", ["he", "el", "llo", "lo"]))
// console.log(countConstruct2("hello", ["el", "llo", "lo"]))
// console.log(countConstruct2("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
// console.log(countConstruct2("oooooooooooooooooooooooof", ["o", "oo", "ooo", "oooo", "ooooo"]))


//m target
//n words
// O(n^m)
// O(m)

const allConstruct = (target, words) => {
    if (target === "") return [[]];
    let allways = []
    for (let word of words){
        if (target.indexOf(word) === 0){
            const result = target.slice(word.length);
            const combos = allConstruct(result, words);
            const targetWays = combos.map(arr => [word, ...arr])
            allways.push(...targetWays);
        }
    }
    return allways;
}


const allConstruct2 = (target, words, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === "") return [[]];
    let allways = []
    for (let word of words){
        if (target.indexOf(word) === 0){
            const result = target.slice(word.length);
            const combos = allConstruct2(result, words, memo);
            const targetWays = combos.map(arr => [word, ...arr])
            allways.push(...targetWays);
        }
    }
    memo[target] = allways;
    return allways;
}


// console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]))
// console.log(allConstruct("hello", ["he", "el", "llo", "lo", "h"]))
// console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))
// console.log(allConstruct("hello", ["el", "llo", "lo"]))
// console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
// console.log(allConstruct("oooooooooooooooooooooooof", ["o", "oo", "ooo", "oooo", "ooooo"]))


console.log(allConstruct2("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]))
console.log(allConstruct2("hello", ["he", "el", "llo", "lo", "h"]))
console.log(allConstruct2("purple", ["purp", "p", "ur", "le", "purpl"]))
console.log(allConstruct2("hello", ["el", "llo", "lo"]))
console.log(allConstruct2("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
console.log(allConstruct2("oooooooooooooooooooooooof", ["o", "oo", "ooo", "oooo", "ooooo"]))