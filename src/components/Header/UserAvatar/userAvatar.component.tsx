import { Avatar, Button, Popover, Text } from '@mantine/core';
import useCurrentUser from 'hooks/useCurrentUser';
import { FC } from 'react';

const UserAvatar: FC = () => {
    const currentUser = useCurrentUser();
    const initials = currentUser.firstName.charAt(0) + currentUser.lastName.charAt(0); // TODO: Add safety net

    return (
        <Popover width={200} position="bottom" withArrow shadow="md" offset={5}>
            <Popover.Target>
                <Avatar className="cursor-pointer" component="button">
                    {initials}
                </Avatar>
            </Popover.Target>
            <Popover.Dropdown>
                <div className="flex flex-col gap-2">
                    <Text>Hello {currentUser.firstName}!</Text>
                    <Button variant="outline" color="red" fullWidth>
                        Log out
                    </Button>
                </div>
            </Popover.Dropdown>
        </Popover>
    );
};

export default UserAvatar;
