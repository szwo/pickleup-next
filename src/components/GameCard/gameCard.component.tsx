import type { FC } from 'react';
import type { Game } from 'types';
import { Card, Text, Badge, Button, Group } from '@mantine/core';

type Props = {
    game: Game;
};

const GameCard: FC<Props> = ({ game }) => {
    const { id, start, durationInMinutes, location, confirmedPlayers } = game;

    return (
        <div className="max-w-sm">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Group justify="space-between" mb="xs">
                    <Text fw={500}>{location.name}</Text>
                    <Badge color="grey">Players Needed</Badge>
                </Group>
                <Text size="sm">
                    <p>Start: {start}</p>
                    <p>Duration: {durationInMinutes} minutes</p>
                    <p>Address: {location.address}</p>
                    <p>Confirmed Players: {confirmedPlayers.length}</p>
                </Text>

                <Group>
                    <Button color="red" mt="md" radius="md" variant="light">
                        Decline
                    </Button>
                    <Button color="yellow" mt="md" radius="md" variant="light">
                        Tentative
                    </Button>
                    <Button color="green" mt="md" radius="md" variant="light">
                        Accept
                    </Button>
                </Group>
            </Card>
        </div>
    );

    return (
        <div
            id={id}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
            <div>
                <p>
                    <span className="font-bold">{location.name}</span>
                </p>
            </div>
        </div>
    );
};

export default GameCard;
