import util from "./util";
import DirectionMap from "./direction-map";

class GameState {

    constructor() {
        this.obi = util.getRandomCoordinate();
        this.r2d2 = util.getRandomCoordinate();
        this.r2d2Direction = 'NORTH';

        // Make sure the characters start in different places
        while (this.charactersHaveReunited()) {
            this.r2d2 = util.getRandomCoordinate();
        }
    }

    // Checks and returns true if the characters have reunited (ie. are in the same position)
    charactersHaveReunited() {
        return ((this.r2d2.x === this.obi.x) && (this.r2d2.y === this.obi.y));
    }

    // Calculate new position and apply if within the 100x100 grid.
    moveR2D2(scalar) {
        let newCoords;
        switch (this.r2d2Direction) {
            case 'NORTH':
                newCoords = {
                    x: this.r2d2.x,
                    y: this.r2d2.y + scalar
                };
                break;
            case 'EAST':
                newCoords = {
                    x: this.r2d2.x + scalar,
                    y: this.r2d2.y
                };
                break;
            case 'SOUTH':
                newCoords = {
                    x: this.r2d2.x,
                    y: this.r2d2.y - scalar
                };
                break;
            case 'WEST':
                newCoords = {
                    x: this.r2d2.x - scalar,
                    y: this.r2d2.y
                };
                break;
        }

        // Verify each item is in range
        if ((newCoords.x < 100 && newCoords.x >= 0) && (newCoords.y < 100 && newCoords.y >= 0)) {
            this.r2d2 = newCoords;
        }
    }

    // Updates the new direction by rotating LEFT or RIGHT
    // Takes a param of 'LEFT' or 'RIGHT'
    rotateR2D2(rotation) {
        this.r2d2Direction = DirectionMap[this.r2d2Direction][rotation];
    }

    // Prints the report with the current positions and direction
    printReport() {
        console.log(
            `R2-D2 is at ${this.r2d2.x},${this.r2d2.y} facing ${this.r2d2Direction}
Obi Wan Kenobi is at ${this.obi.x},${this.obi.y}`);
    }

}

export default GameState;