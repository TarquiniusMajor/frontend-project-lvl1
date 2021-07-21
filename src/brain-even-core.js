import readlineSync from "readline-sync";

function evenGame() {
    const num = Math.round(Math.random() * 1000 + 1);
    const result = {
        rightAnswer: null,
        answer: null,
        gameResult: null,
        resultMessage: null
    };

    result.rightAnswer = num % 2 === 0 ? 'yes' : 'no';
    result.answer = readlineSync.question(`Question: ${num} \nYour answer: `);
    result.gameResult = result.rightAnswer === result.answer;
    if (result.gameResult) {
        result.resultMessage = 'Correct!';
    } else {
        result.resultMessage = `${result.answer} is wrong answer ;(. Correct answer was ${result.rightAnswer}.`
    }

    return result;
}

export default evenGame;


