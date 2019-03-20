import readline from 'readline';
import process from 'process';
import GameState from "./game-state";
import util from "./util";

// Game State
let gameState;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt for commands until Obi Wan and R2D2 are in the same location
function gameLoop() {
    // The prompt
    rl.question('> ', (cmd) => {
        handleCommand(cmd);

        if (gameState && gameState.charactersHaveReunited()) {
            console.log('Congratulations, you\'ve saved the Rebellion!');
            process.exit(0);
        } else {
            gameLoop();
        }
    });
}

// Updates the game state based on the command. Prints error if invalid command.
function handleCommand(commandStr) {
    const [cmd, ...options] = commandStr.split(' ');

    // Make sure they are initializing the game state with the land command
    if (!gameState && cmd !== 'LAND') {
        console.log('You must begin with the command: LAND');
        return;
    }

    switch (cmd) {
        case 'LAND':
            // Create new game state or ignore if we already have one
            if (!gameState) {
                gameState = new GameState();
                gameState.printReport();
            }
            break;
        case 'MOVE':
            // Make sure the option is valid before updating r2d2
            const distance = util.getMove(options[0]);
            if (distance === undefined) {
                console.error(`Proper Usage: MOVE (x)`);
                break;
            }
            gameState.moveR2D2(distance);
            break;
        case 'LEFT':
            gameState.rotateR2D2('LEFT');
            break;
        case 'RIGHT':
            gameState.rotateR2D2('RIGHT');
            break;
        case 'REPORT':
            gameState.printReport();
            break;
        default:
            console.error(`Invalid Command: ${cmd}`);
    }
}

// Start!
gameLoop();

