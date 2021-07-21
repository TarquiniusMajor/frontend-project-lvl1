#!/usr/bin/env node
import { userNameQuery, gameProcess } from '../../src/index.js';

console.log('Welcome to the Brain Games!');
const userName = userNameQuery();
const gameStartMessage = 'What is the result of the expression?';
const questionFunction = () => {
  const firstNumber = Math.round(Math.random() * 100);
  const secondNumber = Math.round(Math.random() * 100);
  const currentOperationCode = Math.random() * 3;
  let currentOperation = null;
  if (currentOperationCode < 0.98) { currentOperation = '+'; } else if (currentOperation < 1.98) { currentOperation = '*'; } else { currentOperation = '-'; }
  return [firstNumber, secondNumber, currentOperation];
};
const messageFunction = (arr) => `Question: ${arr[0]} ${arr[2]} ${arr[1]} \nYour answer: `;

const rightAnswerFunction = (arr) => {
  let result = null;
  switch (arr[2]) {
    case '+':
      result = `${arr[0] + arr[1]}`;
      break;
    case '*':
      result = `${arr[0] * arr[1]}`;
      break;
    case '-':
      result = `${arr[0] - arr[1]}`;
      break;
    default:
      break;
  }
  return result;
};

gameProcess(gameStartMessage, questionFunction, messageFunction, rightAnswerFunction, userName);
