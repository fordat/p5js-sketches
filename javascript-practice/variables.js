let vals = [3, 6, 31, 6, 2]




let bingo = vals.reduce((acc, val) => 
    val > acc ? val : acc 
);
console.log(bingo);

// let answer = vals.reduce((acc,val) => acc + val, 10);
// console.log(answer);