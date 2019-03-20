import GameState from "../../src/game-state";


describe('onCreate', () => {
    it('should be initialized', () => {
        const gs = new GameState();

        expect(gs.obi).toBeTruthy();
        expect(gs.r2d2).toBeTruthy();
        expect(gs.r2d2Direction).toBeTruthy();
    });
});

describe('charactersHaveReunited', () => {
    it('given same position should return true', () => {
        const gs = new GameState();
        gs.r2d2 = {
            x: 0,
            y: 0
        };
        gs.obi = {
            x: 0,
            y: 0
        };
        expect(gs.charactersHaveReunited()).toBe(true);
    });

    it('given different y positions should return false', () => {
        const gs = new GameState();
        gs.r2d2 = {
            x: 0,
            y: 1
        };
        gs.obi = {
            x: 0,
            y: 0
        };
        expect(gs.charactersHaveReunited()).toBe(false);
    });

    it('given different x positions should return false', () => {
        const gs = new GameState();
        gs.r2d2 = {
            x: 0,
            y: 1
        };
        gs.obi = {
            x: 0,
            y: 0
        };
        expect(gs.charactersHaveReunited()).toBe(false);
    });
});

describe('moveR2D2', () => {

    it('should move r2 the correct distance when facing north', () => {
        const gs = new GameState();
        gs.r2d2 = {
            x: 0,
            y: 0
        };
        gs.moveR2D2(11);
        expect(gs.r2d2.y).toBe(11);
        expect(gs.r2d2.x).toBe(0);
    });

    it('should not move r2 when exceeding the size of the grid y on upper bounds', () => {
        const gs = new GameState();
        gs.r2d2 = {
            x: 50,
            y: 50
        };

        gs.moveR2D2(50);
        expect(gs.r2d2.y).toBe(50);
        expect(gs.r2d2.x).toBe(50);
    });

    it('should not move r2 when exceeding the size of the grid x on upper bounds', () => {
        const gs = new GameState();
        gs.r2d2Direction = 'EAST';
        gs.r2d2 = {
            x: 50,
            y: 50
        };

        gs.moveR2D2(50);
        expect(gs.r2d2.y).toBe(50);
        expect(gs.r2d2.x).toBe(50);
    });

    it('should move r2 when standing on the edge of the upper bounds of the grid y', () => {
        const gs = new GameState();
        gs.r2d2 = {
            x: 50,
            y: 50
        };

        gs.moveR2D2(49);
        expect(gs.r2d2.y).toBe(99);
        expect(gs.r2d2.x).toBe(50);
    });

    it('should move r2 when standing on the edge of the upper bounds of the grid x', () => {
        const gs = new GameState();
        gs.r2d2Direction = 'EAST';
        gs.r2d2 = {
            x: 50,
            y: 50
        };

        gs.moveR2D2(49);
        expect(gs.r2d2.y).toBe(50);
        expect(gs.r2d2.x).toBe(99);
    });
});

describe('rotateR2D2', () => {
    it('should set the new direction r2 is facing', () => {
        const gs = new GameState();
        gs.rotateR2D2('LEFT');
        expect(gs.r2d2Direction).toBe('WEST')
    })
});