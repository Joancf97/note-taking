const getNotes = require('./utils.js');
const validator = require('validator');
const chalk = require('chalk');

const msg = getNotes();

console.log(msg);

console.log(validator.isEmail('jcastanedaforno@asdf.com'));
console.log(chalk.green('Succes!'));