#!/usr/bin/env node
import { userNameQuery, gameProcess } from '../../src/index.js';

console.log('Welcome to the Brain Games!');
const userName = userNameQuery();
const gameStartMessage = 'Find the greatest common divisor of given numbers.';
const questionFunction = () => {
  const numOne = Math.round(Math.random() * 1000 + 1);
  const numTwo = Math.round(Math.random() * 1000 + 1);
  return [numOne, numTwo];
};
const messageFunction = (arr) => `Question: ${arr[0]} ${arr[1]}\nYour answer: `;

const rightAnswerFunction = (arr) => {
  const euclidus = (first, second) => {
    let a = first;
    let b = second;
    if (a !== b && a % b !== 0 && b % a !== 0) {
      if (a > b) {
        a %= b;
      } else { b %= a; }
      return euclidus(a, b);
    }
    if (a === b || a % b === 0 || b % a === 0) {
      if (a >= b) { return `${a}`; }
      return `${b}`;
    }
    if (a > b) { return `${b}`; }
    return `${a}`;
  };
  return euclidus(arr[0], arr[1]);
};

gameProcess(gameStartMessage, questionFunction, messageFunction, rightAnswerFunction, userName);
