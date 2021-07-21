#!/usr/bin/env node
import readlineSync from 'readline-sync';
import evenGame from '../src/brain-even-core.js';
import game from '../src/brain-games-core.js';

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Welcome to the Brain Games!');
game(evenGame, name, 'Answer "yes" if the number is even, otherwise answer "no".');
