var fizzBuzz = function(n) {
    let arr = [];
    for (let i = 1; i <= n;i++){
        let current = ""
        if (i % 3 === 0) current += "Fizz";
        if (i % 5 === 0 ) current += "Buzz";
        if (current === "") current += i;
        arr.push(current);
    }
    return arr
};

console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(15))