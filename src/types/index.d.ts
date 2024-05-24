export type Player = {
    id: string;
    firstName: string;
    lastName: string;
    dupr?: number;
};

export type Location = {
    id: string;
    name: string;
    address: string;
    isIndoors: boolean;
    hasLights: boolean;
    hasDedicatedPickleball: boolean;
    hasBackstop: boolean;
    fee: number;
};

export type Game = {
    id: string;
    start: string; // ISO String
    durationInMinutes: number;
    location: Location;
    confirmedPlayers: Array<Player>;
    tentativePlayers: Array<Player>;
};
