#!/usr/bin/env node
import readlineSync from 'readline-sync';

const generateNum = () => Math.round(Math.random() * 1000 + 1);
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let wins = 0;
  do {
    const num = generateNum();
    const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
    const answer = readlineSync.question(`Question: ${num} \nYour answer: `);
    if (answer === rightAnswer) {
      console.log('Correct!');
      wins += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${name}!`);
      break;
    }
  } while (wins < 3);
  if (wins === 3) { console.log(`Congratulations, ${name}!`); }
};
console.log('Welcome to the Brain Games!');
evenGame();
