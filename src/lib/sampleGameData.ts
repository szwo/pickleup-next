import { Game, Location } from 'types';

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
        confirmedPlayers: [],
        tentativePlayers: [],
        declinedPlayers: [],
    },
    {
        id: 'randomGame2',
        start: '2024-06-01T18:00:00.000Z',
        durationInMinutes: 60,
        location: sampleLocation2,
        confirmedPlayers: [],
        tentativePlayers: [],
        declinedPlayers: [],
    },
];
