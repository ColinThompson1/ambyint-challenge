
// Returns a random int within [min, max)
// From example 3 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// Returns a new object with an x and y position
function getRandomCoordinate() {
    return {
        x: getRandomInt(0, 100),
        y: getRandomInt(0, 100)
    };
}

// Parse int from string. Return int if successful, undefined otherwise
function getMove(move) {
    if (move) {
        let parsed = Number.parseInt(move);
        if (!Number.isNaN(parsed)) {
            return parsed;
        }
    }
}

export default {
    getRandomInt,
    getRandomCoordinate,
    getMove
}