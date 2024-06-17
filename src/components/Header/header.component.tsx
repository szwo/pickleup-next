import { Text } from '@mantine/core';
import type { FC } from 'react';
import UserAvatar from './UserAvatar';

export const FIXED_HEADER_HEIGHT = 60; // Fixed header height in pixels

const Header: FC = () => {
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
                <UserAvatar />
            </div>
        </div>
    );
};

export default Header;
