const game = (currentGame, name, startMessage) => {
    console.log(startMessage);
    let wins = 0;
    do {
        const currentResult = currentGame();
        if (currentResult.gameResult === true) {
            console.log(currentResult.resultMessage);
            wins += 1;
        } else {
            console.log(`${currentResult.resultMessage}\nLet's try again, ${name}!`);
            break;
        }
    } while (wins < 3);
    if (wins === 3) { console.log(`Congratulations, ${name}!`); }
};

export default game;