import { Game, Location, Player } from 'types';
import gamesList from './sampleData/gamesList.json';

export const samplePlayer: Player = {
    id: 'samplePlayer1',
    firstName: 'Simon',
    lastName: 'Wong',
};

export const samplePlayer2: Player = {
    id: 'samplePlayer2',
    firstName: 'Oreo',
    lastName: 'Pet',
};

export const sampleLocation: Location = {
    id: 'randomLocation',
    name: 'Bob White Park',
    address: '485 Falcon Rd, Wayne, PA 19087',
};

export const sampleLocation2: Location = {
    id: 'randomLocation2',
    name: 'Teegarden Park',
    address: '440 Old State Rd, Berwyn, PA 19312',
};

export const sampleData = gamesList as unknown as Array<Game>;
