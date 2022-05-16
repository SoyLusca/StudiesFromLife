const ages = [23, 32, 17, 16, 34];
const moreAges = [23, 32, 34];

const lessThan18 = (age) => age < 18;
const anyLessThan18 = (array) => array.some(lessThan18);
const everyoneLessThan18 = (array) => array.every(lessThan18);

const greaterThan18 = (age) => age > 18;
const anyGreaterThan18 = (array) => array.some(greaterThan18);
const everyoneGreaterThan18 = (array) => array.every(greaterThan18);

console.log("Alguém menor que 18? " + anyLessThan18(ages));
