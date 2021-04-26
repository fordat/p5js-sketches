let vals = [5, 4, 9, 2, 1];
let letters = ["a", "B", "hello", "Aardvark"]
let mixed = ["a", 2, 420, "Big", "betty", "boop", "poop"]

let pairs = [{
    x: 2,
    y: 10
}, {
    x: 5,
    y: 10000
}, {
    x: 100,
    y: 100
}
];

function compare(a,b) {
    return a.y - b.y
}


let s = "It was a dark and stormy night."
let words = s.split(/\W+/).filter(word => word.length >= 2)
words.sort((a,b) => a.length - b.length)

console.log(words);
pairs.sort(compare);
console.log(pairs);

mixed.sort(() => Math.random() - 0.5);
console.log(mixed);


let mystery = Array.apply(null, {length: 15}).map(Number.call, Number);
console.log('da mystery of.. ' + mystery);