const successInput = require('./input/success-reverse.json');
const {simulate} = require('./simulator');

const output = simulate(successInput);

console.log(output);
