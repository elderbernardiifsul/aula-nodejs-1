//este é meu arquivo principal

const calc = require('./calc');
const chalk = require('chalk');

console.log(chalk.redBright('Este é o meu primeiro programa Node.js'));

const resSoma = calc.soma(10, 2);
const resSub = calc.sub(6,2);

console.log(chalk.green(`O resultado da soma é ${resSoma}`));
console.log(chalk.blue(`O resultado da subtração é ${resSub}`));