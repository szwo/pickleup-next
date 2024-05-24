import type { FC } from 'react';
import type { Game } from 'types';
import { Card, Text, Badge, Button, Group, Tooltip, type TooltipProps } from '@mantine/core';

type Props = {
    game: Game;
};

const sharedTooltipProps: Partial<TooltipProps> = {
    position: 'bottom',
    offset: 10,
    withArrow: true,
    openDelay: 200,
    transitionProps: {
        transition: 'fade-down',
        duration: 300,
    },
};

const GameCard: FC<Props> = ({ game }) => {
    const { id, start, durationInMinutes, location, confirmedPlayers } = game;

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Group justify="space-between" mb="xs">
                <Text fw={500}>{location.name}</Text>
                <Badge color="grey">Players Needed</Badge>
            </Group>
            <div className="flex my-2">
                <div className="flex-grow">
                    <Text size="sm">
                        <p>Start: {start}</p>
                        <p>Duration: {durationInMinutes} minutes</p>
                        <p>Address: {location.address}</p>
                        <p>Confirmed Players: {confirmedPlayers.length}</p>
                    </Text>
                </div>
                <div className="self-center pl-8">
                    <Text size="lg">
                        <i className="fa-solid fa-chevron-right" />
                    </Text>
                </div>
            </div>
            <div className="flex justify-center">
                <Group>
                    <Tooltip {...sharedTooltipProps} label="Decline">
                        <Button color="red" mt="md" radius="md" variant="default">
                            <i className="fa-solid fa-x" />
                        </Button>
                    </Tooltip>
                    <Tooltip {...sharedTooltipProps} label="Tentative">
                        <Button color="yellow" mt="md" radius="md" variant="default">
                            <i className="fa-solid fa-question" />
                        </Button>
                    </Tooltip>
                    <Tooltip {...sharedTooltipProps} label="Accept">
                        <Button color="green" mt="md" radius="md">
                            <i className="fa-solid fa-check" />
                        </Button>
                    </Tooltip>
                </Group>
            </div>
        </Card>
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
