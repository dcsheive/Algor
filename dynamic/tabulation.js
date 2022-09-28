// visualize the problem as a table
// size the table based on the inputs
// initialize the table with default values
/// .fill(0)
// seed the trivial answer into the table
/// table[0] = 1
// iterate through the table
// fill further postitions based on the current position
/// table[i + 1] 







// time O(n)
// space O(n)

const fib = (n) => {
    const table = Array(n + 1).fill(0);
    table[1] = 1;
    for (let i = 0; i <= n; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }
    return table[n];
}

// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));
// console.log(fib(50));

// space (n*m)
// time (n*m)

const gridTraveler = (x, y) => {
    const table = Array(x + 1)
        .fill()
        .map(() => Array(y + 1).fill(0))
    table[1][1] = 1;
    for (let i = 0; i <= x; i++) {
        for (let j = 0; j <= y; j++) {
            const current = table[i][j];
            if (j + 1 <= y) table[i][j + 1] += current;
            if (i + 1 <= x) table[i + 1][j] += current;
        }
    }
    return table[x][y];
}

// console.log(gridTraveler(3, 3));
// console.log(gridTraveler(18, 18));

// n targetSum
// m numbers
// time O(n * m)
// space O(n)

const canSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;
    for (i = 0; i <= targetSum; i++) {
        if (table[i]) {
            for (let num of numbers) {
                if (i + num <= targetSum ) {
                    table[num + i] = true;
                }
            }
        }
    }
    return table[targetSum];
}

// console.log(canSum(7, [5, 3, 4]));
// console.log(canSum(7, [2, 4]));
// console.log(canSum(300, [7, 14]));
// console.log(canSum(300, [7, 15]));

// n targetSum
// m numbers
// time O(n * m^2)
// space O(m^2)

const howSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];
    for (i = 0; i <= targetSum; i++){
        if (table[i] !== null){
            for (let num of numbers){
                if (i + num <= targetSum){
                    table[i + num] = [...table[i], num];
                }
            }
        }
    }
    return table[targetSum];
}

// console.log(howSum(7, [5, 3, 4]));
// console.log(howSum(7, [2, 4]));
// console.log(howSum(300, [7, 14]));
// console.log(howSum(300, [7, 15]));


// n targetSum
// m numbers
// time O(n * m^2)
// space O(m^2)

const bestSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];
    for (let i = 0; i <= targetSum; i++){
        if (table[i] !== null){
            for (let num of numbers){
                if (i + num <= targetSum){
                    const current = table[i+num];
                    const potential = [...table[i], num]
                    if (current === null || potential.length < current.length ){
                        table[i+num] = potential;
                    }
                }
            }
        }
    }
    return table [targetSum]
}

// console.log(bestSum(7, [5, 3, 4]));
// console.log(bestSum(8, [2, 3, 5]));
// console.log(bestSum(7, [2, 4]));
// console.log(bestSum(300, [7, 14]));
// console.log(bestSum(300, [7, 15, 30]));

// n targetSum
// m numbers
// time O(n * m^2)
// space O(m)


const canConstruct = (target, words) => {
    const table = Array(target.length + 1).fill(false)
    table[0] = true;
    for (i = 0; i <= target.length; i++){
        if( table[i]) {
            for (let word of words){
                if (target.slice(i, i+word.length) === word){
                    table[i + word.length] = true;
                }
            }
        }
    }
    return table[target.length]
}

// console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
// console.log(canConstruct("hello", ["he", "el", "llo", "lo"]))
// console.log(canConstruct("hello", ["el", "llo", "lo"]))
// console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))

// n targetSum
// m numbers
// time O(n * m^2)
// space O(m)

const countConstruct = (target, words) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;
    for (i = 0; i <= target.length; i++){
        if(table[i] > 0) {
            for (let word of words){
                if (target.slice(i, i+word.length) === word){
                    table[i + word.length] += table[i];
                }
            }
        }
    }
    return table[target.length]
}

// console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
// console.log(countConstruct("hello", ["he", "el", "llo", "lo"]))
// console.log(countConstruct("hello", ["el", "llo", "lo"]))
// console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))
// console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))

// n targetSum
// m numbers
// time O(n * m^2)
// space O(m)

const howConstruct = (target, words) => {
    const table = Array(target.length + 1).fill(null)
    table[0] = [];
    for (i = 0; i <= target.length; i++){
        if( table[i] != null) {
            for (let word of words){
                if (target.slice(i, i+word.length) === word){
                    table[i + word.length] =  [...table[i], word];
                }
            }
        }
    }
    return table[target.length]
}

// console.log(howConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
// console.log(howConstruct("hello", ["he", "el", "llo", "lo"]))
// console.log(howConstruct("hello", ["el", "llo", "lo"]))
// console.log(howConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))


// n targetSum
// m numbers
// time O(n ^ m)
// space O(n ^ m)

const allConstruct = (target, words) => {
    const table = Array(target.length + 1)
        .fill()
        .map(() => []);
    table[0] = [[]];
    for (i = 0; i <= target.length; i++){
        for (let word of words){
            if (target.slice(i, i + word.length) === word){
                const newWays = table[i].map(arr => [...arr, word]);
                table[i + word.length].push(...newWays);
            }
        }
    }
    return table[target.length]
}

console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef","c"]))
console.log(allConstruct("hello", ["he", "el", "llo", "lo"]))
console.log(allConstruct("hello", ["el", "llo", "lo"]))
console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
