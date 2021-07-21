#!/usr/bin/env node
import { userNameQuery, gameProcess } from '../../src';

console.log('Welcome to the Brain Games!');
const userName = userNameQuery();
const gameStartMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
const questionFunction = () => Math.round(Math.random() * 1000 + 1);
const messageFunction = (num) => `Question: ${num}\nYour answer: `;

const rightAnswerFunction = (num) => (num % 2 === 0 ? 'yes' : 'no');

gameProcess(gameStartMessage, questionFunction, messageFunction, rightAnswerFunction, userName);
