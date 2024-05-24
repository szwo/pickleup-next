import { Game, Location, Player } from 'types';

const samplePlayer: Player = {
    id: 'samplePlayer1',
    firstName: 'Simon',
    lastName: 'Wong',
};

const samplePlayer2: Player = {
    id: 'samplePlayer2',
    firstName: 'Oreo',
    lastName: 'Pet',
};

const sampleLocation: Location = {
    id: 'randomLocation',
    name: 'Bob White Park',
    address: '485 Falcon Rd, Wayne, PA 19087',
};

const sampleLocation2: Location = {
    id: 'randomLocation2',
    name: 'Teegarden Park',
    address: '440 Old State Rd, Berwyn, PA 19312',
};

export const sampleData: Array<Game> = [
    {
        id: 'randomGame',
        start: '2024-05-30T22:00:00.000Z',
        durationInMinutes: 90,
        location: sampleLocation,
        confirmedPlayers: [samplePlayer],
        tentativePlayers: [],
        declinedPlayers: [],
    },
    {
        id: 'randomGame2',
        start: '2024-06-01T18:00:00.000Z',
        durationInMinutes: 60,
        location: sampleLocation2,
        confirmedPlayers: [samplePlayer2],
        tentativePlayers: [],
        declinedPlayers: [],
    },
];
