import type { FC } from 'react';
import type { Game } from 'types';
import { Card, Text, Badge, Button, Group, Tooltip, type TooltipProps, Title } from '@mantine/core';
import dayjs from 'dayjs';

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

    const formattedStartDate = dayjs(start).format('dddd M/D h:mma');

    const handleDetailsClick = () => {
        console.log('clicked on game id: ', id);
    };

    return (
        <Card id={`game-card-${id}`} shadow="sm" padding="lg" radius="md" withBorder>
            <div className="cursor-pointer" role="button" aria-label="Open game details" onClick={handleDetailsClick}>
                <Title order={3} className="mb-2">
                    {formattedStartDate}
                </Title>
                <Title order={4}>{location.name}</Title>
                <Text size="sm">{location.address}</Text>
                <div className="flex my-2">
                    <div className="flex-grow">
                        <Text size="sm">{durationInMinutes} minutes</Text>

                        <Text size="sm">Confirmed Players: {confirmedPlayers.length}</Text>
                    </div>

                    <div className="self-center pl-8">
                        <Text size="lg">
                            <i className="fa-solid fa-chevron-right" />
                        </Text>
                    </div>
                </div>
                <Badge color="grey">Players Needed</Badge>
            </div>
            <div className="flex justify-center mt-2">
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
};

export default GameCard;
