const DirectionMap = {
    'NORTH': {
        'LEFT': 'WEST',
        'RIGHT': 'EAST',
    },
    'EAST': {
        'LEFT': 'NORTH',
        'RIGHT': 'SOUTH',
    },
    'SOUTH': {
        'LEFT': 'EAST',
        'RIGHT': 'WEST',
    },
    'WEST': {
        'LEFT': 'SOUTH',
        'RIGHT': 'NORTH',
    }
};

export default DirectionMap;