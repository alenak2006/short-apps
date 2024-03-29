const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventors1500 = inventors.filter((inventor) =>
    inventor.year >= 1500 && inventor.year < 1600
)
//console.table(inventors1500);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const inventorsNames = inventors.map((inventor) =>
    `${inventor.first} ${inventor.last}`
)
//console.log(inventorsNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const inventorsByBirthdate = inventors.sort((prev, curr) => {
    return (prev.year < curr.year) ? -1 : 1
})
//console.log(inventorsByBirthdate);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const allYearsLived = inventors.reduce((acc, inventor) => {
    //console.log(inventor.passed - inventor.year);
    return acc + (inventor.passed - inventor.year)
}, 0)

//console.table(allYearsLived);

// 5. Sort the inventors by years lived

// const inventorsByAge = inventors
//     .map((inventor) => Object.assign(inventor, { age: inventor.passed - inventor.year }))
//     .sort((prev, curr) => {
//         return (prev.age < curr.age) ? -1 : 1
//     })


// const inventorsByAge = inventors
//     .map((inventor) => {
//         inventor.age = inventor.passed - inventor.year;
//         return inventor;
//     })
//     .sort((prev, curr) => {
//         return (prev.age > curr.age) ? -1 : 1
//     })

const inventorsByAge = inventors
    .map((inventor) => ({ ...inventor, age: inventor.passed - inventor.year }))
    .sort((prev, curr) => {
        return (prev.age < curr.age) ? -1 : 1
    })


console.table(inventorsByAge);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const list = document.querySelectorAll('.mw-category-group a');
// const arrList = Array.from(list);
// arr.map((item) => item.innerHTML).filter((item)=> item.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name
const peopleByName = people
    .map((person) => person.split(','))
    .sort((prev, curr) => prev[0] < curr[0] ? -1 : 1)
//.sort((prev, curr) => prev[1] < curr[1] ? -1 : 1)
//console.table(peopleByName);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const totals = data.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {})

console.log(totals);

//create function some

[].__proto__.some = function (cb) {
    for (let index = 0; index < this.length; index++) {
        let isValid = cb(this[index], index, this);
        if (isValid) {
            return true;
        }

    }
    return false;
}

let arr = [{ name: 'pete', age: 12 }, { name: 'ada', age: 67 }, { name: 'harriot', age: 54 }];

[].__proto__.every = function (cb) {
    for (let index = 0; index < this.length; index++) {
        let isValid = cb(this[index], index, this);
        if (!isValid) {
            return false;
        }

    }
    return true;
}