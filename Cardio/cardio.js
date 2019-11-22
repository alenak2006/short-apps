
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
const inventorsBorn1500 = inventors.filter((inventor) => inventor.year >= 1500 && inventor.year < 1600);
console.log(inventorsBorn1500);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const inventorsNames = inventors.map((inventor) => inventor.first + ' ' + inventor.last);
console.log(inventorsNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const inventorsBorn1500Sorted = inventors.sort((prev, curr) => prev.year - curr.year);

console.log(inventorsBorn1500Sorted);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalYearsInventors = inventors.reduce((acc, curr) => (acc + (curr.passed - curr.year)), 0);
console.log(totalYearsInventors);

// 5. Sort the inventors by years lived
const inventorsYearsLived = inventors.sort((prev, curr) => ((curr.passed - curr.year) - (prev.passed - prev.year)));

console.log(inventorsYearsLived);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const boulevards = ['Marshals', 'Auguste-Blanqui', 'Barbès', 'Beaumarchais', 'l\'Amiral-Bruix', 'Mortier', 'Poniatowski',
    'Soult', 'Capucines', 'Chapelle', 'Clichy', 'Crime', 'Général-d\'Armée-Jean-Simon', 'Haussmann', 'l\'Hôpital', 'Italiens', 'Lefebvre'
    , 'de la Madeleine', 'de Magenta', 'Marguerite-de-Rochechouart', 'Montmartre', 'du Montparnasse', 'Raspail', 'Richard-Lenoir', 'Saint-Germain'
    , 'Saint-Michel', 'de Sébastopol', 'de Strasbourg', 'du Temple', 'Voltaire', 'de la Zone']

const boulevardsWithDe = boulevards.filter((boulevard) => boulevard.includes('de'));
console.log(boulevardsWithDe);

// 7. sort Exercise
// Sort the people alphabetically by last name

const inventorsSortedByName = inventors.sort((prev, curr) => {
    if (prev.last < curr.last) return -1;
    else return 1;
})
console.log(inventorsSortedByName);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const sum = {};

debugger;
for (let index = 0; index < data.length; index++) {

    if (!sum[data[index]]) {
        sum[data[index]] = 1;
        continue;
    }
    sum[data[index]]++;


}
console.log(sum);
