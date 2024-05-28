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

export type RsvpResponse = 'accepted' | 'tentative' | 'declined';

export type Game = {
    id: string;
    start: string; // ISO String
    durationInMinutes: number;
    location: Location;
    players: Record<Player['id'], RsvpResponse>;
};
