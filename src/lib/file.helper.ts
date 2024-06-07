import fs from 'fs';
import type { Game, Player } from 'types';

enum FileName {
    GAMES_LIST = 'gamesList',
    USERS = 'users',
    LOCATIONS = 'locations',
}

const getFilePath = (fileName: FileName) => `sampleData/${fileName}.json`;

const getFileContents = <T>(fileName: FileName): T => {
    const filePath = getFilePath(fileName);

    if (!fs.existsSync(filePath)) {
        throw new Error(`${fileName} missing from disk!`);
    }

    const file = fs.readFileSync(filePath, { encoding: 'utf8' });
    const data = JSON.parse(file);

    return data as T;
};

// eslint-disable-next-line
const saveFile = (fileName: FileName, contents: any) =>
    fs.writeFileSync(getFilePath(fileName), JSON.stringify(contents, null, 2), 'utf8');

export const getGamesList = () => getFileContents<Array<Game>>(FileName.GAMES_LIST);
export const saveGamesList = (newGamesList: Array<Game>) => saveFile(FileName.GAMES_LIST, newGamesList);

export const getPlayers = () => getFileContents<Record<string, Player>>(FileName.USERS);
export const savePlayers = (newPlayers: Record<string, Player>) => saveFile(FileName.USERS, newPlayers);

export const getLocations = () => getFileContents<Record<string, Location>>(FileName.LOCATIONS);
export const saveLocations = (newLocations: Record<string, Location>) => saveFile(FileName.LOCATIONS, newLocations);
