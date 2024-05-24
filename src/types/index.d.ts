export type Player = {
    id: string;
    firstName: string;
    lastName: string;
};

export type Location = {
    id: string;
    name: string;
    address: string;
};

export type Game = {
    id: string;
    start: string; // ISO String
    durationInMinutes: number;
    location: Location;
    confirmedPlayers: Array<Player>;
    tentativePlayers: Array<Player>;
    declinedPlayers: Array<Player>;
};
