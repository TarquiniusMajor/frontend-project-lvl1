#!/usr/bin/env node
import { userNameQuery, gameProcess } from '../../src/index.js';

console.log('Welcome to the Brain Games!');
const userName = userNameQuery();
const gameStartMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const questionFunction = () => [Math.round(Math.random() * 1000)];

const messageFunction = (arr) => `Question: ${arr[0]}\nYour answer: `;

const rightAnswerFunction = (arr) => {
  let result = 'yes';
  for (let i = 2; i < arr[0]; i += 1) {
    if (arr[0] % i === 0) {
      result = 'no';
      break;
    }
  }
  return result;
};

gameProcess(gameStartMessage, questionFunction, messageFunction, rightAnswerFunction, userName);
