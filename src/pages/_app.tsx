import { Inter } from 'next/font/google';
import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { MantineProvider } from '@mantine/core';
import DefaultLayout from 'components/DefaultLayout';
import { theme } from 'lib/mantineTheme';
import LocationsProvider from 'providers/locations.provider';
import UserProvider from 'providers/user.provider';

import '@mantine/core/styles.css';
import 'styles/globals.css';

// Using next/font instead of a manual setup, we get:
// - significantly easier setup
// - automatic best font practices
// - reduced layout shift
// - no network requests from the browser
const primaryFont = Inter({
    subsets: ['latin'],
    variable: '--primary-font',
});

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <UserProvider>
            <MantineProvider theme={theme} defaultColorScheme="dark">
                <main className={`${primaryFont.variable} font-sans`}>
                    <DefaultLayout>
                        <LocationsProvider>
                            <Component props={pageProps} />
                        </LocationsProvider>
                    </DefaultLayout>
                </main>
            </MantineProvider>
        </UserProvider>
    );
};

export default App;
