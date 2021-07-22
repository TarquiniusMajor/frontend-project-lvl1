#!/usr/bin/env node
import { userNameQuery, gameProcess } from '../../src/index.js';

console.log('Welcome to the Brain Games!');
const userName = userNameQuery();
const gameStartMessage = 'What number is missing in the progression?';
const questionFunction = () => {
  const elCount = Math.round(Math.random() * 10 + 5);
  const concealedNum = Math.floor(Math.random() * elCount);
  const result = [[], concealedNum];
  const startNum = Math.round(Math.random() * 100);
  const increment = Math.round(Math.random() * 10);
  for (let i = 0; i <= elCount; i += 1) {
    const currentEl = startNum + increment * i;
    result[0].push(`${currentEl}`);
  }
  return result;
};

const messageFunction = (arr) => {
  const resArr = [];
  for (let i = 0; i < arr[0].length; i += 1) {
    if (i === arr[1]) {
      resArr.push('..');
    } else { resArr.push(arr[0][i]); }
  }
  const resString = resArr.join(' ');
  return `Question: ${resString}\nYour answer: `;
};

const rightAnswerFunction = (arr) => `${arr[0][arr[1]]}`;

gameProcess(gameStartMessage, questionFunction, messageFunction, rightAnswerFunction, userName);
