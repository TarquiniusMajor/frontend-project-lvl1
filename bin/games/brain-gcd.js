#!/usr/bin/env node
import { userNameQuery, gameProcess } from '../../src/index.js';

console.log('Welcome to the Brain Games!');
const userName = userNameQuery();
const gameStartMessage = 'Find the greatest common divisor of given numbers.';
const questionFunction = () => {
  const numOne = Math.round(Math.random() * 100 + 1);
  const numTwo = Math.round(Math.random() * 100 + 1);
  return [numOne, numTwo];
};
const messageFunction = (arr) => `Question: ${arr[0]} ${arr[1]}\nYour answer: `;

const rightAnswerFunction = (arr) => {
  const euclidus = (first, second) => {
    let a = 0;
    let b = 0;
    if (first > second) {
      a = first;
      b = second;
    } else {
      a = second;
      b = first;
    }
    if (a % b === 0) { return b; }
    else {
      a = a % b;
      return euclidus(a, b);
    }
  };
  return `${euclidus(arr[0], arr[1])}`;
};

gameProcess(gameStartMessage, questionFunction, messageFunction, rightAnswerFunction, userName);
