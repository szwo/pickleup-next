import { AppShell, Avatar, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Menu from 'components/Menu';
import { FC } from 'react';

type Props = {
    children?: React.ReactNode;
};

const DefaultLayout: FC<Props> = ({ children }) => {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <div className="flex items-center h-[60px] w-full">
                    <div className="mx-3">
                        <Avatar hiddenFrom="sm" onClick={toggle} />
                    </div>
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
                </div>
            </AppShell.Header>

            <AppShell.Main>
                <div className="flex justify-center">{children}</div>
            </AppShell.Main>

            <AppShell.Navbar p="md">
                <Menu />
            </AppShell.Navbar>
        </AppShell>
    );
};

export default DefaultLayout;
