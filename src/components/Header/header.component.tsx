import { Avatar, Text } from '@mantine/core';
import useCurrentUser from 'hooks/useCurrentUser';
import type { FC } from 'react';

export const FIXED_HEADER_HEIGHT = 60; // Fixed header height in pixels

const Header: FC = () => {
    const currentUser = useCurrentUser();
    const initials = currentUser.firstName.charAt(0) + currentUser.lastName.charAt(0); // TODO: Add safety net

    return (
        <div className={`flex justify-between items-center h-full mx-4`}>
            <div>
                <Text
                    fw={700}
                    variant="gradient"
                    gradient={{ from: '#ffdd9b', to: '#e39500', deg: 30 }}
                    component="h1"
                    className="text-3xl"
                >
                    PickleUp
                </Text>
            </div>
            <div>
                <Avatar className="cursor-pointer" component="button">
                    {initials}
                </Avatar>
            </div>
        </div>
    );
};

export default Header;
