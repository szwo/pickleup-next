import { AppShell } from '@mantine/core';
import Header from 'components/Header';
import { FIXED_HEADER_HEIGHT } from 'components/Header/header.component';
import type { FC } from 'react';

type Props = {
    children?: React.ReactNode;
};

const DefaultLayout: FC<Props> = ({ children }) => {
    return (
        <AppShell header={{ height: FIXED_HEADER_HEIGHT }} padding="md">
            <AppShell.Header>
                <Header />
            </AppShell.Header>
            <AppShell.Main>
                <div className="flex justify-center">{children}</div>
            </AppShell.Main>
        </AppShell>
    );
};

export default DefaultLayout;
