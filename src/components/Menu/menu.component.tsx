import { Text } from '@mantine/core';
import { FC } from 'react';

const Menu: FC = () => {
    return (
        <div>
            <Text className="inline" span>
                Welcome,{' '}
            </Text>
            <Text fw={700} className="inline" span>
                Simon
            </Text>
            !
        </div>
    );
};

export default Menu;
