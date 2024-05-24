import { Avatar, Text } from '@mantine/core';
import type { FC } from 'react';

export const FIXED_HEADER_HEIGHT = 60; // Fixed header height in pixels

const Header: FC = () => {
    return (
        <div className={`flex justify-between items-center h-[${FIXED_HEADER_HEIGHT}px] mx-4`}>
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
                <Avatar className="cursor-pointer" component="button" />
            </div>
        </div>
    );
};

export default Header;
