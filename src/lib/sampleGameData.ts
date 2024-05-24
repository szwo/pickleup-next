import { Game, Location } from 'types';

const sampleLocation: Location = {
    id: 'randomLocation',
    name: 'Bob White Park',
    address: '485 Falcon Rd, Wayne, PA 19087',
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
];
