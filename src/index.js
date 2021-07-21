import readlineSync from 'readline-sync';

export const userNameQuery = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const gameProcess = (gameStartMessage, questionFunc, msgFunc, correctFunc, name) => {
  console.log(gameStartMessage);
  let wins = 0;
  do {
    const questionNumber = questionFunc();
    const message = msgFunc(questionNumber);
    const rightAnswer = correctFunc(questionNumber);
    const userAnswer = readlineSync.question(message);
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      wins += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. \nLet's try again, ${name}!`);
      break;
    }
  } while (wins < 3);
  if (wins === 3) { console.log(`Congratulations, ${name}!`); }
};
