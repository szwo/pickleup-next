import { Badge, Button, Card, Group, Text, Title, Tooltip, type TooltipProps } from '@mantine/core';
import dayjs from 'dayjs';
import useCurrentUser from 'hooks/useCurrentUser';
import useLocations from 'hooks/useLocations';
import { API_ROUTES } from 'lib/routes';
import { RsvpRequest } from 'pages/api/updateRsvp';
import type { FC } from 'react';
import { KeyedMutator } from 'swr';
import type { Game, RsvpResponse } from 'types';

type Props = {
    game: Game;
    isLoading: boolean;
    mutate: KeyedMutator<Game[]>;
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

const GameCard: FC<Props> = ({ game, isLoading, mutate }) => {
    const { id, start, durationInMinutes, locationId, players } = game;
    const locations = useLocations();

    const location = locations[locationId];
    const currentUser = useCurrentUser();

    const numberConfirmed = Object.values(players).filter(rsvp => rsvp === 'accepted').length;
    const accepted = players[currentUser.id] === 'accepted';
    const tentative = players[currentUser.id] === 'tentative';
    const declined = players[currentUser.id] === 'declined';

    const formattedStartDate = dayjs(start).format('dddd M/D h:mma');

    const handleDetailsClick = () => {
        console.log('clicked on game id: ', id);
    };

    const handleRsvpClick = async (type: RsvpResponse) => {
        const body: RsvpRequest = {
            gameId: game.id,
            playerId: currentUser.id,
            response: type,
        };

        const init: RequestInit = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
            },
        };

        await fetch(API_ROUTES.updateRsvp, init);
        mutate();
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
                        <Text size="sm">Confirmed Players: {numberConfirmed}</Text>
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
                        <Button
                            color="red"
                            mt="md"
                            radius="md"
                            variant={declined ? undefined : 'default'}
                            disabled={isLoading}
                            onClick={() => handleRsvpClick('declined')}
                        >
                            <i className="fa-solid fa-x" />
                        </Button>
                    </Tooltip>
                    <Tooltip {...sharedTooltipProps} label="Tentative">
                        <Button
                            color="yellow"
                            mt="md"
                            radius="md"
                            variant={tentative ? undefined : 'default'}
                            disabled={isLoading}
                            onClick={() => handleRsvpClick('tentative')}
                        >
                            <i className="fa-solid fa-question" />
                        </Button>
                    </Tooltip>
                    <Tooltip {...sharedTooltipProps} label="Accept">
                        <Button
                            color="green"
                            mt="md"
                            radius="md"
                            variant={accepted ? undefined : 'default'}
                            disabled={isLoading}
                            onClick={() => handleRsvpClick('accepted')}
                        >
                            <i className="fa-solid fa-check" />
                        </Button>
                    </Tooltip>
                </Group>
            </div>
        </Card>
    );
};

export default GameCard;
